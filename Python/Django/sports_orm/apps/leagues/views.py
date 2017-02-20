from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

"""
1. ...all baseball leagues
2. ...all womens' leagues
3. ...all leagues where sport is any type of hockey
4. ...all leagues where sport is something OTHER THAN football
5. ...all leagues that call themselves "conferences"
6. ...all leagues in the Atlantic region
7. ...all teams based in Dallas
8. ...all teams named the Raptors
9. ...all teams whose location includes "City"
10. ...all teams whose names begin with "T"
11. ...all teams, ordered alphabetically by location
12. ...all teams, ordered by team name in reverse alphabetical order
13. ...every player with last name "Cooper"
14. ...every player with first name "Joshua"
15. ...every player with last name "Cooper" EXCEPT FOR Joshua
16. ...all players with first name "Alexander" OR first name "Wyatt"
"""

"""
# 1 ...all baseball leagues
def index(request):
	context = {
		"leagues": League.objects.filter(sport__startswith="baseb")
	}
	return render(request, "leagues/index.html", context)

# 2 ...all womens' leagues
def index(request):
	context = {
		"leagues": League.objects.filter(name__icontains='womens')
	}
	return render(request, "leagues/index.html", context)

# 3 ...all leagues where sport is any type of hockey
def index(request):
	context = {
		"leagues": League.objects.filter(sport__icontains="hockey")
	}
	return render(request, "leagues/index.html", context)

# 4 ...all leagues where sport is something OTHER THAN football
def index(request):
	context = {
		"leagues": League.objects.exclude(sport__icontains="football")
	}
	return render(request, "leagues/index.html", context)

# 5 ...all leagues that call themselves "conferences"
def index(request):
	context = {
		"leagues": League.objects.filter(name__icontains="conference")
	}
	return render(request, "leagues/index.html", context)

# 6 ...all leagues in the Atlantic region
def index(request):
	context = {
		"leagues": League.objects.filter(name__icontains="Atlantic")
	}
	return render(request, "leagues/index.html", context)

# 7 ...all teams based in Dallas
def index(request):
	context = {
		"teams": Team.objects.filter(location__icontains="Dallas")
	}
	return render(request, "leagues/index.html", context)

# 8 ...all teams named the Raptors
def index(request):
	context = {
		"teams": Team.objects.filter(team_name__icontains="raptors")
	}
	return render(request, "leagues/index.html", context)

# 9 ...all teams whose location includes "City"
def index(request):
	context = {
		"teams": Team.objects.filter(location__icontains="city")
	}
	return render(request, "leagues/index.html", context)

# 10 ...all teams whose names begin with "T"
def index(request):
	context = {
		"teams": Team.objects.filter(team_name__startswith="T")
	}
	return render(request, "leagues/index.html", context)

#11 ...all teams, ordered alphabetically by location
def index(request):
	context = {
		"teams": Team.objects.order_by('location')
	}
	return render(request, "leagues/index.html", context)

#12 ...all teams, ordered by team name in reverse alphabetical order
def index(request):
	context = {
		"teams": Team.objects.order_by('-location')
	}
	return render(request, "leagues/index.html", context)

#13 ...every player with last name "Cooper"
def index(request):
	context = {
		"players": Player.objects.filter(last_name__icontains="Cooper")
	}
	return render(request, "leagues/index.html", context)

#14 ...every player with first name "Joshua"
def index(request):
	context = {
		"players": Player.objects.filter(first_name__icontains="Joshua")
	}
	return render(request, "leagues/index.html", context)

#15 ...every player with last name "Cooper" EXCEPT FOR Joshua
def index(request):
	context = {
		"players": Player.objects.filter(last_name__icontains="Cooper").exclude(first_name__icontains="Joshua")
	}
	return render(request, "leagues/index.html", context)
"""
#16 ...all players with first name "Alexander" OR first name "Wyatt"
def index(request):
	context = {
		"players": Player.objects.filter(first_name__icontains="Alexander")|Player.objects.filter(first_name__icontains="Wyatt")
	}
	return render(request, "leagues/index.html", context)

"""
ORIGINAL:
def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
	}
	return render(request, "leagues/index.html", context)
"""

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")