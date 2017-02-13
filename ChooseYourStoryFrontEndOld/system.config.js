/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'source', // 'dist',
    '@angular':                   'node_modules/@angular',
    '@angular2-material':         'node_modules/@angular2-material',
	  '@ngrx':					            'node_modules/@ngrx',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'immutable':                  'node_modules/immutable/dist/immutable.js',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.browser.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  var ngrxPackageNames = [
	  'core',
	  'store',
  ];
  var materialPackageNames = [
    'core',
    'input',
    'button',
    'list',
    'toolbar',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName, prefix) {
    packages[prefix + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  function packFolderName(packageName, prefix) {
    packages[prefix + packageName] = { main: packageName + '.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName, prefix) {
    packages[prefix + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = function(packageName, prefix) {
	  System.packageWithIndex ? packIndex(packageName, prefix) : packUmd(packageName, prefix);
  };
  // Add package entries for angular packages
  ngPackageNames.forEach(function(package) { setPackageConfig(package, '@angular/'); });
  ngrxPackageNames.forEach(function(package) { packIndex(package, '@ngrx/'); });
  materialPackageNames.forEach(function(package) { packFolderName(package, '@angular2-material/'); });
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
