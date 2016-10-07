angular.module('architectureKbadminApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/allapattribute.html',
    "<div class=\"container\"> <h1 class=\"page-header\">Existing ArchProfile Attributes</h1> <ul class=\"nav nav-tabs\"> <li ng-repeat=\"type in allTypes\" ng-class=\"active(type)\"><a href=\"\" ng-click=\"select(type)\">{{type}}</a></li> </ul>  <table class=\"table table-hover\"> <thead> <tr> <th>ID</th> <th>Name</th> <th>Core Added</th> <th>View</th> </tr> </thead> <tbody> <tr ng-repeat=\"apat in apats\"> <td style=\"vertical-align:middle\">{{apat.id}}</td> <td style=\"vertical-align:middle\">{{apat.name}}</td> <td style=\"vertical-align:middle\"><div ng-show=\"apat.coreAdded\">{{apat.coreAdded | date:'mediumDate'}}</div></td> <td><a ng-click=\"navigate(apat.id)\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-share\"></span> Edit</a></td> </tr> </tbody> </table> </div>"
  );


  $templateCache.put('views/alluser.html',
    "<div class=\"container\"> <h1 class=\"page-header\">Existing User</h1> <table class=\"table table-hover\"> <thead> <tr> <th>ID</th> <th>Username</th> <th>E-Mail</th> <th>Firstname</th> <th>Lastname</th> <th>View</th> </tr> </thead> <tbody> <tr ng-repeat=\"user in users\"> <td style=\"vertical-align:middle\">{{user.id}}</td> <td style=\"vertical-align:middle\">{{user.username}}</td> <td style=\"vertical-align:middle\">{{user.email}}</td> <td style=\"vertical-align:middle\">{{user.firstName}}</td> <td style=\"vertical-align:middle\">{{user.lastName}}</td> <td><a ng-click=\"navigate(user.id)\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-share\"></span> Edit</a></td> </tr> </tbody> </table> </div>"
  );


  $templateCache.put('views/apattributedetail.html',
    "<div class=\"container\"> <h1 class=\"page-header\">Core Data</h1> <form class=\"form-horizontal\" role=\"form\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\">General Information</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"name\">Name:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"apat.name\" id=\"name\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"definition\">Definition:</label> <div class=\"col-sm-9\"> <textarea type=\"text\" class=\"form-control\" ng-model=\"apat.definition\" rows=\"4\" id=\"definition\" ng-readonly=\"!edit\"></textarea> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"type\">Type:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"apat.type\" id=\"type\" ng-readonly=\"true\"> </div> </div> <div class=\"form-group\" ng-show=\"apat.creatorEmail&&apat.creatorId\"> <label class=\"control-label col-sm-3\">Creator:</label> <div class=\"col-sm-9\"> <button ng-click=\"showCreator()\" type=\"button\" class=\"btn btn-default\">{{apat.creatorEmail}}</button> </div> </div> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\">Activation</div> <div class=\"panel-body\"> <div class=\"form-inline\" ng-show=\"apat.creationDate>0\"> <label class=\"control-label col-sm-3\">Creationdate</label> <label class=\"control-label col-sm-9\"><p class=\"text-left\">{{apat.creationDate | date:'medium'}}</p></label> </div> <div class=\"form-inline\" ng-show=\"apat.coreAdded>0\"> <label class=\"control-label col-sm-3\">Core Added:</label> <label class=\"control-label col-sm-9\"><p class=\"text-left\">{{apat.coreAdded | date:'medium'}}</p></label> </div> <div class=\"form-inline\" ng-show=\"apat.lastModified>0\"> <label class=\"control-label col-sm-3\">Last Modified:</label> <label class=\"control-label col-sm-9\"><p class=\"text-left\">{{apat.lastModified | date:'medium'}}</p></label> </div> </div> </div> <div class=\"panel-body\"> <div class=\"form-group\"> <div class=\"form-inline pull-right\"> <a ng-click=\"edit=false\" class=\"btn btn-danger\" ng-show=\"edit\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back</a> <a ng-click=\"coreAdd()\" class=\"btn btn-success\" ng-show=\"edit&&(!apat.coreAdded)\"><span class=\"glyphicon glyphicon-floppy-saved\"></span> Add to Core</a> <a ng-click=\"coreRemove()\" class=\"btn btn-warning\" ng-show=\"edit&&apat.coreAdded\"><span class=\"glyphicon glyphicon-floppy-remove\"></span> Remove from Core</a> <a ng-click=\"update()\" class=\"btn btn-primary\" ng-show=\"edit\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</a> <a ng-click=\"edit=true\" class=\"btn btn-warning\" ng-show=\"!edit\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> </div> </div> </div> </form> </div>"
  );


  $templateCache.put('views/createapattribute.html',
    "<div class=\"container\"> <h1 class=\"page-header\">Create Core Data</h1> <form class=\"form-horizontal\" role=\"form\" name=\"createapat\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\">New Core Data</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"name\">Name:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"apat.name\" id=\"name\" name=\"name\" placeholder=\"Enter Name\" required> <span class=\"label label-danger\" ng-show=\"createapat.name.$error.required\"> Required!</span> <span class=\"label label-danger\" ng-show=\"(!createapat.name.$error.required)&&apat.name.length<5\"> Minimum Size 5!</span> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"definition\">Definition:</label> <div class=\"col-sm-9\"> <textarea type=\"text\" class=\"form-control\" ng-model=\"apat.definition\" rows=\"4\" id=\"definition\" name=\"definition\" placeholder=\"Enter Definition\" required></textarea> <span class=\"label label-danger\" ng-show=\"createapat.definition.$error.required\"> Required!</span> <span class=\"label label-danger\" ng-show=\"(!createapat.definition.$error.required)&&apat.definition.length<5\"> Minimum Size 5!</span> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"type\">Type:</label> <div class=\"col-sm-9\"> <select class=\"form-control\" id=\"type\" ng-model=\"apat.type\"> <option value=\"\">---Please select---</option> <!-- not selected / blank option --> <option ng-repeat=\"type in allTypes\" value=\"{{type}}\">{{type}}</option> </select> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-3\"></div> <div class=\"col-sm-9\"> <div class=\"checkbox\"> <label><input ng-model=\"isCore\" type=\"checkbox\" value=\"\">is Core Attribute</label> </div> </div> </div> </div> </div> <div class=\"panel-body\"> <div class=\"form-group\"> <div class=\"form-inline pull-right\"> <a ng-click=\"create()\" ng-disabled=\"buttonDisabled\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Create</a> </div> </div> </div> </form> </div>"
  );


  $templateCache.put('views/createuser.html',
    "<div class=\"container\"> <h1 class=\"page-header\">Create User</h1> <form class=\"form-horizontal\" role=\"form\" name=\"createuser\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\">New User</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"email\">Email: </label> <div class=\"col-sm-9\"> <input type=\"email\" class=\"form-control\" ng-model=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter E-Mail\" required> <span class=\"label label-danger\" ng-show=\"createuser.email.$error.required\"> Required!</span> <span class=\"label label-danger\" ng-show=\"createuser.email.$error.email\"> Not valid email!</span> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"username\">Username:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"username\" id=\"username\" name=\"username\" placeholder=\"Enter Username\" required> <span class=\"label label-danger\" ng-show=\"createuser.username.$error.required\"> Required!</span> </div> </div> </div> </div> <div class=\"panel-body\"> <div class=\"form-group\"> <div class=\"form-inline pull-right\"> <a ng-click=\"create()\" ng-disabled=\"buttonDisabled\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Create</a> </div> </div> </div> </form> </div> <!-- Modal --> <div class=\"modal fade\" id=\"userPasswordModal\" role=\"dialog\"> <div class=\"modal-dialog modal-sm\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> <h4 class=\"modal-title\">User Password</h4> </div> <div class=\"modal-body\"> <p>The created Password for the User is:</p> <input class=\"form-control\" ng-readonly=\"true\" ng-model=\"password\"> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button> </div> </div> </div> </div>"
  );


  $templateCache.put('views/footer.html',
    "<p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p>"
  );


  $templateCache.put('views/header.html',
    "<div ng-controller=\"HeaderCtrl\"> <div class=\"navbar navbar-default\" role=\"navigation\"> <div class=\"container-fluid\"> <div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> <a class=\"navbar-brand\" href=\"#/\">ArchKB Admin Page</a> </div> <div ng-show=\"showmenue()\"> <div class=\"collapse navbar-collapse\" id=\"navbararchkb\"> <ul class=\"nav navbar-nav\"> <li><a href=\"#/\">Dashboard</a></li> <li class=\"dropdown\"> <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User Administration<span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a href=\"#/alluser\">Existing User</a></li> <li><a href=\"#/createuser\">Create New User</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a href=\"#/\">Separated link</a></li> </ul> </li> <li class=\"dropdown\"> <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Core Data<span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a href=\"#/allapattribute\">Existing Core Data</a></li> <li><a href=\"#/createapattribute\">Create New Core Data</a></li> </ul> </li> </ul> <ul class=\"nav navbar-nav navbar-right\"> <li class=\"dropdown\"> <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\"></span> <span class=\"caret\"></span></a> <ul class=\"dropdown-menu\"> <li><a href=\"#/\">Profile</a></li> <li><a href=\"#/\">Settings</a></li> <li role=\"separator\" class=\"divider\"></li> <li><a href=\"#/\" ng-click=\"execlogout()\">Logout</a></li> </ul> </li> </ul> <form class=\"navbar-form navbar-right\" role=\"search\"> <div class=\"form-group\"> <input type=\"text\" class=\"form-control\" placeholder=\"Search\"> </div> <button type=\"submit\" class=\"btn btn-default\">Submit</button> </form> </div> </div> <!-- /.navbar-collapse --> </div> </div> </div>"
  );


  $templateCache.put('views/login.html',
    "<div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <div class=\"login-panel panel panel-default\"> <div class=\"panel-heading\"> <h3 class=\"panel-title\">Please Sign In</h3> </div> <div class=\"panel-body\"> <form role=\"form\"> <fieldset> <div class=\"form-group\"> <input class=\"form-control\" placeholder=\"E-mail\" name=\"email\" type=\"email\" autofocus ng-model=\"username\"> </div> <div class=\"form-group\"> <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\" ng-model=\"password\"> </div> <!-- Change this to a button or input when using this as a form --> <button ng-click=\"execlogin()\" class=\"btn btn-lg btn-success btn-block\">Login</button> </fieldset> </form> </div> </div> </div> </div> <!-- Modal --> <div class=\"modal fade\" id=\"loginErrorModal\" role=\"dialog\"> <div class=\"modal-dialog modal-sm\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> <h4 class=\"modal-title\">Login error</h4> </div> <div class=\"modal-body\"> <p>Please check your user data</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> </div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div> </div>"
  );


  $templateCache.put('views/userdetail.html',
    "<div class=\"container\"> <h1 class=\"page-header\">User Profile</h1> <form class=\"form-horizontal\" role=\"form\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\">General Information</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"username\">Username: </label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.originalUsername\" id=\"username\" ng-readonly=\"true\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"email\">E-Mail:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.email\" id=\"email\" ng-readonly=\"true\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"firstName\">First Name:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.firstName\" id=\"firstName\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"lastName\">Last Name:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.lastName\" id=\"lastName\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"about\">About:</label> <div class=\"col-sm-9\"> <textarea type=\"text\" class=\"form-control\" ng-model=\"user.about\" rows=\"4\" id=\"about\" ng-readonly=\"!edit\"></textarea> </div> </div> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\">Address</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"address\">Address:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.address\" id=\"address\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"city\">City:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.city.name\" id=\"city\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"zipcode\">ZIP Code:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.city.zipCode\" id=\"zipcode\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"country\">Country:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.city.country.name\" id=\"country\" ng-readonly=\"!edit\"> </div> </div> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\">Company</div> <div class=\"panel-body\"> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"address\">Company:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.company.name\" id=\"address\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"city\">Address:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.company.address\" id=\"city\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"city\">City:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.company.city.name\" id=\"city\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"zipcode\">ZIP Code:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.company.city.zipCode\" id=\"zipcode\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"country\">Country:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.company.city.country.name\" id=\"country\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"zipcode\">Position:</label> <div class=\"col-sm-9\"> <input type=\"text\" class=\"form-control\" ng-model=\"user.position.name\" id=\"zipcode\" ng-readonly=\"!edit\"> </div> </div> <div class=\"form-group\"> <label class=\"control-label col-sm-3\" for=\"country\">Position Description:</label> <div class=\"col-sm-9\"> <textarea type=\"text\" class=\"form-control\" rows=\"3\" ng-model=\"user.position.description\" id=\"country\" ng-readonly=\"!edit\"></textarea> </div> </div> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\">Activation</div> <div class=\"panel-body\"> <div class=\"form-inline\" ng-show=\"user.dateLocked>0\"> <label class=\"control-label col-sm-3\">Deactivated at:</label> <label class=\"control-label col-sm-9\"><p class=\"text-left\">{{user.dateLocked | date:'medium'}}</p></label> </div> <div class=\"form-inline\" ng-show=\"user.dateActivated>0\"> <label class=\"control-label col-sm-3\">Activated at:</label> <label class=\"control-label col-sm-9\"><p class=\"text-left\">{{user.dateActivated | date:'medium'}}</p></label> </div> </div> </div> <div class=\"panel-body\"> <div class=\"form-group\"> <div class=\"form-inline pull-right\"> <a ng-click=\"edit=false\" class=\"btn btn-danger\" ng-show=\"edit\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back</a> <a ng-click=\"resetpassword()\" class=\"btn btn-warning\" ng-show=\"edit\" ng-disabled=\"resetpwdisabled\"><span class=\"glyphicon glyphicon-floppy-remove\"></span> Reset Password</a> <a ng-click=\"activate()\" class=\"btn btn-success\" ng-show=\"edit&&user.dateLocked>user.dateActivated\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Activate</a> <a ng-click=\"deactivate()\" class=\"btn btn-warning\" ng-show=\"edit&&(!user.dateLocked||user.dateLocked<user.dateActivated)\"><span class=\"glyphicon glyphicon-floppy-remove\"></span> Deactivate</a> <a ng-click=\"update()\" class=\"btn btn-primary\" ng-show=\"edit\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Save</a> <a ng-click=\"edit=true\" class=\"btn btn-warning\" ng-show=\"!edit\"><span class=\"glyphicon glyphicon-edit\"></span> Edit</a> </div> </div> </div> </form> </div> <!-- Modal --> <div class=\"modal fade\" id=\"userPasswordModal\" role=\"dialog\"> <div class=\"modal-dialog modal-sm\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button> <h4 class=\"modal-title\">User Password</h4> </div> <div class=\"modal-body\"> <p>The created Password for the User is:</p> <input class=\"form-control\" ng-readonly=\"true\" ng-model=\"password\"> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button> </div> </div> </div> </div>"
  );

}]);
