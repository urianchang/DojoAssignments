//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

//: Create player factory
myApp.factory('playerFactory', function() {
    var players = [
        {player_name: 'Speros', team: ''},
        {player_name: 'Jimmy', team: ''},
        {player_name: 'Jay', team: ''}
    ];
    var factory = {};
    //: Index method
    factory.getAll = function(callback) {
        callback(players);
    }
    //: Add method
    factory.add = function(player) {
        player.team = '';
        players.push(player);
    }
    //: Delete method
    factory.remove = function(player) {
        players.splice(players.indexOf(player), 1);
    }
    //: Assign team
    factory.assign = function(association) {
        var selected_player = players.filter(function(player) {
            return player.player_name === association.player_name;
        })[0];
        selected_player.team = association.team_name;
    }
    //: Remove team assignment
    factory.waived = function(obj) {
        var selected_player = players.filter(function(player) {
            return player.player_name === obj.player_name;
        })[0];
        selected_player.team = "";
    }
    //: Return the object
    return factory;
});

//: Create team factory
myApp.factory('teamFactory', function() {
    var teams = [
        {team_name: 'Seahawks', players: []},
        {team_name: '49ers', players: []},
        {team_name: 'Honeybadgers', players: []}
    ];
    var factory = {};
    //: Index method
    factory.getAll = function(callback) {
        callback(teams);
    }
    //: Add method
    factory.add = function(team) {
        team.players = [];
        teams.push(team);
    }
    //: Delete method
    factory.remove = function(team) {
        teams.splice(teams.indexOf(team), 1);
    }
    //: Sign player
    factory.sign = function(association) {
        var selected_team = teams.filter(function(team) {
            return team.team_name === association.team_name;
        })[0];
        selected_team.players.push(association.player_name);
    }
    //: Waive player
    factory.waive = function(obj) {
        var selected_team = teams.filter(function(team) {
            return team.team_name === obj.team;
        });
        if (selected_team.length > 0) {
            selected_team[0].players.splice(selected_team[0].players.indexOf(obj.player_name), 1);
        }
    }
    //: Return the object
    return factory;
});

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/players',{
        templateUrl: 'partials/players.html',
        controller: 'PlayersController'
    })
    .when('/teams',{
        templateUrl: 'partials/teams.html',
        controller: 'TeamsController'
    })
    .when('/associations',{
        templateUrl: 'partials/associations.html',
        controller: 'AssociationsController'
    })
    .when('/:teamname',{
        templateUrl: 'partials/roster.html',
        controller: 'TeamsController'
    })
    .otherwise({
      redirectTo: '/players'
    });
});

//: Players Controller
myApp.controller('PlayersController', ['$scope', 'playerFactory', function ($scope, playerFactory) {
    $scope.sortType = 'player_name';
    $scope.sortReverse = false;
    $scope.players = [];
    playerFactory.getAll(function (data) {
        $scope.players = data;
    });
    $scope.add = function() {
        if($scope.newPlayer) {
            playerFactory.add($scope.newPlayer);
            $scope.newPlayer = {};
        }
    };
    $scope.remove = function(player) {
        playerFactory.remove(player);
    };
}]);

//: Teams Controller
myApp.controller('TeamsController', ['$scope', 'teamFactory', '$routeParams', function ($scope, teamFactory, $routeParams) {
    $scope.sortType = 'team_name';
    $scope.sortReverse = false;
    $scope.teams = [];
    teamFactory.getAll(function (data) {
        $scope.teams = data;
    });
    //: If team name is supplied in route...
    $scope.team = $scope.teams.filter(function(team) {
        return team.team_name === $routeParams.teamname;
    })[0];
    // console.log($scope.team);
    $scope.add = function() {
        if($scope.newTeam) {
            teamFactory.add($scope.newTeam);
            $scope.newTeam = {};
        }
    };
    $scope.remove = function(team) {
        teamFactory.remove(team);
    };
}]);

//: Associations Controller
myApp.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', function ($scope, playerFactory, teamFactory) {
    $scope.sortType = 'player_name';
    $scope.sortReverse = false;
    $scope.players = [];
    $scope.teams = [];
    playerFactory.getAll(function (data) {
        $scope.players = data;
    });
    teamFactory.getAll(function (data) {
        $scope.teams = data;
    });
    $scope.addAssociation = function() {
        if ($scope.newAssociation) {
            playerFactory.assign($scope.newAssociation);
            teamFactory.sign($scope.newAssociation);
            $scope.newAssociation = {};
        }
    };
    $scope.delAssociation = function(player) {
        //: Waive from Team before removing association from player
        teamFactory.waive(player);
        playerFactory.waived(player);
    };
}]);
