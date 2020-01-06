import Router from './Router';

const page = document.querySelector('#page');
const router = new Router();

router.setRoute('/', function (req) {
  console.log('home page');
});
router.setRoute('/index', function (req) {
  console.log('home page');
});


router.init(); // this method will process the logics