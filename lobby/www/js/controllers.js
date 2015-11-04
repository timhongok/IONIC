angular.module('lobby.controllers', [])
//------------------------------------------------------
//----- sign in
//------------------------------------------------------
.controller('AppCtrl', function($scope,$rootScope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {
  console.log('wefew');
  $scope.parentobj = {};
  $scope.parentobj.backType = 'Signup';
  $rootScope.rightButtons = [
    { 
      text: 'Open side navigation',
      type: 'button-positive',
      content: '<i class="icon ion-navicon"></i>',
      click: function(e) {
        $scope.sideMenuController.toggleRight();
      }
    }
  ];
})
.controller('SlideCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {

    $scope.he = $window.innerHeight;
    angular.element($window).bind('resize', function() {
      $scope.he = $window.innerHeight;
    });

    

    document.body.style.backgroundImage = "url('images/welcome_screen_background_one.png')";
    $scope.slideHasChanged = function($index){
      //alert($index);
      switch ($index){
        case 0:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-baseball.jpg')";
          break;
        case 1:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-basketball.jpg')";
          break;
        case 2:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-football.jpg')";
          break;
        case 3:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-hockey.jpg')";
          break;
      }
      
    }
    $scope.joinclick = "btnjoinactive";
    $scope.down = function(){
      $scope.joinclick = "btnjoininactive";
    }
    $scope.up = function(){
      $scope.joinclick = "btnjoinactive";
    }
    $scope.signup = function(){
      $state.go("app.signup");
      $scope.parentobj.backType = 'Signup';
    }
    $scope.login = function(){
      $state.go("app.login");
      $scope.parentobj.backType = 'Login';
    }
   
})

.controller('SignupCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {
    $scope.selected = -1;
    $scope.visiblestate = "HIDE";


    $scope.signupclick = "btnjoinactive";
    $scope.down = function(){
      $scope.signupclick = "btnjoininactive";
    }
    $scope.up = function(){
      $scope.signupclick = "btnjoinactive";
    }

    $scope.menu = function(){
      $state.go("main.menu");
    }

    $scope.isSelected = function(type) {
        if(type == $scope.selected) {
            return "selected";
        } else {
            return "";
        }
    }

    $scope.selectItem = function(type) {
        $scope.selected = type;
    }

    $scope.visible1 = function(){
        if($scope.visiblestate == "HIDE"){
            $scope.visiblestate = "SHOW";
        }else if($scope.visiblestate == "SHOW"){
            $scope.visiblestate = "HIDE";
        }
    }
})

.controller('LoginCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {
  $scope.selected = -1;
    $scope.visiblestate = "HIDE";
    
    $scope.menu = function(){
      $state.go("main.menu");
    }

    $scope.isSelected = function(type) {
        if(type == $scope.selected) {
            return "selected";
        } else {
            return "";
        }
    }

    $scope.selectItem = function(type) {
        $scope.selected = type;
    }

    $scope.visible1 = function(){
        if($scope.visiblestate == "HIDE"){
            $scope.visiblestate = "SHOW";
        }else if($scope.visiblestate == "SHOW"){
            $scope.visiblestate = "HIDE";
        }
    }

    $scope.positions = [
      {name:"aaa", minAge:"20", maxAge:"60"},
      {name:"bbb", minAge:"10", maxAge:"70"},
      {name:"ccc", minAge:"30", maxAge:"90"}
    ];
})

.controller('MainCtrl',function($scope,$http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
    console.log("bb");
    $scope.toggleMenu = function() {
        $scope.sideMenuController.toggleLeft();
    }

    $scope.addfunds = function(){
        console.log("addfunds");
        $ionicSideMenuDelegate.toggleLeft();
        $state.go("main.addfunds");
    }

    $scope.withdraw = function(){
      console.log("withdraw");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.withdraw");
    }

    $scope.transactionhistory = function(){
      console.log("transactionhistory");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.transaction");
    }

    $scope.howtoplay = function(){
      console.log("howtoplay");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.howtoplay");
    }

    $scope.about = function(){
      console.log("about");
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.rules = function() {
      console.log("rules");
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.logout = function(){
      console.log("logout");
      $ionicSideMenuDelegate.toggleLeft();
      $scope.go("app.slide");
    }

    $scope.support = function(){
      console.log("support");
      $ionicSideMenuDelegate.toggleLeft();
    }
})

.controller('MenuCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate, $ionicSlideBoxDelegate){
    $scope.leftButtons = [{
        type: 'button-clear button',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];

    $scope.list_height = $window.innerHeight - 250;
    angular.element($window).bind('resize', function() {
      $scope.list_height = $window.innerHeight - 250;
    });
    $scope.openstate_nfl=true;
    $scope.openstate_nhl=true;
    $scope.openstate_nba=true;
    $scope.openstate_mlb=true;
    $scope.openstate_cfb=true;
    $scope.openstate_cbb=true;
    $scope.dropdownimg_nfl = "chevrondown";
    $scope.dropdownimg_nhl = "chevrondown";
    $scope.dropdownimg_nba = "chevrondown";
    $scope.dropdownimg_mlb = "chevrondown";
    $scope.dropdownimg_cfb = "chevrondown";
    $scope.dropdownimg_cbb = "chevrondown";
    $scope.showNFLlist = false;
    $scope.showNHLlist = false;
    $scope.showNBAlist = false;
    $scope.showMLBlist = false;
    $scope.showCFBlist = false;
    $scope.showCBBlist = false;
    $scope.state0 = "menu_action_bar_active";
    $scope.state1 = "menu_action_bar_inactive";
    $scope.state2 = "menu_action_bar_inactive";
    $scope.state3 = "menu_action_bar_inactive";
    $scope.slideHasChanged = function($index){
      //alert($index);
      switch ($index){
        case 0:
          $scope.state0 = "menu_action_bar_active";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 1:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_active";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 2:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_active";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 3:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_active";
          break;
      }
      
    }


    $scope.lobby = function(){
      $ionicSlideBoxDelegate.slide(0);
    }
    $scope.upcoming = function(){
      $ionicSlideBoxDelegate.slide(1);
    }
    $scope.live = function(){
      $ionicSlideBoxDelegate.slide(2);
    }
    $scope.recent = function(){
      $ionicSlideBoxDelegate.slide(3);
    }

    $scope.nfl_list_click = function(){
      if($scope.dropdownimg_nfl == "chevrondown"){
        $scope.dropdownimg_nfl = "chevronup";
        $scope.showNFLlist = true;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nfl == "chevronup"){
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.showNFLlist = false;
      }
    }

    $scope.nhl_list_click = function(){
      if($scope.dropdownimg_nhl == "chevrondown"){
        $scope.dropdownimg_nhl = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = true;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nhl == "chevronup"){
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.showNHLlist = false;
      }
    }

    $scope.nba_list_click = function(){
      if($scope.dropdownimg_nba == "chevrondown"){
        $scope.dropdownimg_nba = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = true;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nba == "chevronup"){
        $scope.dropdownimg_nba = "chevrondown";
        $scope.showNBAlist = false;
      }
    }

    $scope.mlb_list_click = function(){
      if($scope.dropdownimg_mlb == "chevrondown"){
        $scope.dropdownimg_mlb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = true;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_mlb == "chevronup"){
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.showMLBlist = false;
      }
    }

    $scope.cfb_list_click = function(){
      if($scope.dropdownimg_cfb == "chevrondown"){
        $scope.dropdownimg_cfb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = true;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_cfb == "chevronup"){
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.showCFBlist = false;
      }
    }

    $scope.cbb_list_click = function(){
      if($scope.dropdownimg_cbb == "chevrondown"){
        $scope.dropdownimg_cbb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = true;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
      }
      else if($scope.dropdownimg_cbb == "chevronup"){
        $scope.dropdownimg_cbb = "chevrondown";
        $scope.showCBBlist = false;
      }
    }
    $scope.items = [
      {date:"8:25pm ET", during:"Thu-Mon", count:"1234"},
      {date:"9:25pm ET", during:"Sunday only", count:"4567"},
      {date:"10:25pm ET", during:"Fri-Sat Conference Showcase", count:"6789"}
      ];

    $scope.items1 = [
        {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000", type:"100-Player League($2-Top 12 Win)"},
        {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000", type:"100-Player League($2-Top 12 Win)"},
        {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000", type:"100-Player League($2-Top 12 Win)"}
    ];
    $scope.nfl_item_click = function(){
      $state.go("main.contests");
    }
    $scope.nhl_item_click = function(){
      $state.go("main.contests");
    }
    $scope.nba_item_click = function(){
      $state.go("main.contests");
    }
    $scope.mlb_item_click = function(){
      $state.go("main.contests");
    }
    $scope.cfb_item_click = function(){
      $state.go("main.contests");
    }
    $scope.cbb_item_click = function(){
      $state.go("main.contests");
    }
})

.controller('AddfundsCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
    $ionicSideMenuDelegate.canDragContent(false);
    $scope.showvalue = true;
    $scope.showvalue1 = false;
    $scope.amount10 = function(){
      $scope.amount = "10.0";
      $scope.active10 = "addfunds_amountbtnactive";
      $scope.active25 = "addfunds_amountbtninactive";
      $scope.active50 = "addfunds_amountbtninactive";
    }
    $scope.amount25 = function(){
      $scope.amount = "25.0"; 
      $scope.active10 = "addfunds_amountbtninactive";
      $scope.active25 = "addfunds_amountbtnactive";
      $scope.active50 = "addfunds_amountbtninactive";
    }
    $scope.amount50 = function(){
      $scope.amount = "50.0";
      $scope.active10 = "addfunds_amountbtninactive";
      $scope.active25 = "addfunds_amountbtninactive";
      $scope.active50 = "addfunds_amountbtnactive";
    }
    $scope.credit = function(){
      $scope.showvalue = false;
      $scope.showvalue1 = true;
    }
    $scope.changepayment = function(){
      $scope.showvalue = true;
      $scope.showvalue1 = false;
    }
})

.controller('ContestsCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.contest_featured_click = function(){
    $state.go("main.featured");
  }
  $scope.contest_league_click = function(){
    $state.go("main.leagues");
  }
  $scope.contest_50_click = function(){
    $state.go("main.50s");
  }
  $scope.contest_tournament_click = function(){
    $state.go("main.tournaments");
  }
  $scope.contest_headto_click = function(){
    $state.go("main.headtohead");
  }
  $scope.contest_multiplier_click = function(){
    $state.go("main.multiplier");
  }
  $scope.contest_create_click = function(){
    $state.go("main.createpublic");
  }

})

.controller('FeaturedCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;
  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/feeview.html', {
    scope: $scope,
  }).then(function(feeviewpop) {
    console.log("vcvbcbvcbcv");
    $scope.feeviewpop = feeviewpop
  });

  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.featured_item_click = function(){
    $state.go("main.contestplayerselection");
  }

 
})

.controller('LeaguesCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.leagues_item_click = function(){
    $state.go("main.contestplayerselection");
  }

})

.controller('50sCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.c50s_item_click = function(){
    $state.go("main.contestplayerselection");
  }
})

.controller('TournamentsCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.tournaments_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {
    console.log(idx);
    if(idx >= 3)
      return "#FFF";
    else
      return "#ADF";
  }
})

.controller('HeadtoheadCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.headtohead_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {
    console.log(idx);
    if(idx >= 3)
      return "#FFF";
    else      
      return "#ADF";
  }
})

.controller('MultiplierCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];

  $scope.multiplier_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {
    console.log(idx);
    if(idx >= 3)
      return "#FFF";
    else
      return "#ADF";
  }
})

.controller('ContestPlayerSelectionCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);

  $scope.showBlankitem = true;
  $scope.showPlayeritem = false;

  $scope.playerselect_item_click = function(){
    $state.go("main.playerlist");
  }

  $scope.submit = function(){

  }

  $scope.contestinfo = function(){
    $state.go("main.contestinfo");
  }
  $scope.contestimport = function(){
    $state.go("main.importlineup");
  }
  $scope.contestclearall = function(){

  }
})

.controller('PlayerListCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.playerselect = function(){

  }
  $scope.playeritemclick = function(){
    $state.go("main.playerdetails");
  }
})

.controller('ContestInfoCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate, $ionicSlideBoxDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);

  $scope.he = $window.innerHeight - 220;
  angular.element($window).bind('resize', function() {
      $scope.he = $window.innerHeight - 220;
  });

  $scope.state0 = "contest_menu_bar_active";
  $scope.state1 = "contest_menu_bar_inactive";
  $scope.state2 = "contest_menu_bar_inactive";
  $scope.state3 = "contest_menu_bar_inactive";

  $scope.slideHasChanged = function($index){
    //alert($index);
    switch ($index){
      case 0:
        $scope.state0 = "contest_menu_bar_active";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 1:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_active";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 2:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_active";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 3:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_active";
        break;
    }
    
  }


    $scope.entries = function(){
      $ionicSlideBoxDelegate.slide(0);
    }

    $scope.games = function(){
      $ionicSlideBoxDelegate.slide(1);
    }

    $scope.prizes = function(){
      $ionicSlideBoxDelegate.slide(2);
    }

    $scope.rulescon = function(){
      $ionicSlideBoxDelegate.slide(3);
    }

})

.controller('PlayerDetailsCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.summary_click = "playerdetails_btn_active"
  $scope.gamelog_click = "playerdetails_btn_inactive"
  $scope.news_click = "playerdetails_btn_inactive"
  $scope.show_summary = true;
  $scope.show_gamelog = false;
  $scope.show_news = false;
  $scope.summary_state = function(){
    $scope.summary_click = "playerdetails_btn_active"
    $scope.gamelog_click = "playerdetails_btn_inactive"
    $scope.news_click = "playerdetails_btn_inactive"
    $scope.show_summary = true;
    $scope.show_gamelog = false;
    $scope.show_news = false;
  }
  $scope.gamelog_state = function(){
    $scope.summary_click = "playerdetails_btn_inactive"
    $scope.gamelog_click = "playerdetails_btn_active"
    $scope.news_click = "playerdetails_btn_inactive"
    $scope.show_summary = false;
    $scope.show_gamelog = true;
    $scope.show_news = false;
  }
  $scope.news_state = function(){
    $scope.summary_click = "playerdetails_btn_inactive"
    $scope.gamelog_click = "playerdetails_btn_inactive"
    $scope.news_click = "playerdetails_btn_active"
    $scope.show_summary = false;
    $scope.show_gamelog = false;
    $scope.show_news = true;
  }
})

.controller('ImportLineUpCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

})

.controller('WithDrawCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.paypal_state = "playerdetails_btn_active";
  $scope.check_state = "playerdetails_btn_inactive";
  $scope.show_paypal = true;
  $scope.show_check = false;
  $scope.paypal_click = function(){
    $scope.paypal_state = "playerdetails_btn_active";
    $scope.check_state = "playerdetails_btn_inactive";
    $scope.show_paypal = true;
    $scope.show_check = false;
  }
  $scope.check_click = function(){
    $scope.paypal_state = "playerdetails_btn_inactive";
    $scope.check_state = "playerdetails_btn_active";
    $scope.show_paypal = false;
    $scope.show_check = true;
  }

})

.controller('TransactionCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

})
.controller('HowtoPlayCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

})

.controller('CreatePublicCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);
    $scope.next = function(){
    $state.go("main.createh2hs");
  }
})

.controller('CreateH2HsCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);

  $scope.showBlankitem = true;
  $scope.showPlayeritem = false;

})