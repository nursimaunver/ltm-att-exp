/***************** 
 * Pilot_V5 Test *
 *****************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'pilot_v5';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginningRoutineBegin());
flowScheduler.add(beginningRoutineEachFrame());
flowScheduler.add(beginningRoutineEnd());
const trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loopLoopBegin, trials_loopLoopScheduler);
flowScheduler.add(trials_loopLoopScheduler);
flowScheduler.add(trials_loopLoopEnd);
flowScheduler.add(blank500msRoutineBegin());
flowScheduler.add(blank500msRoutineEachFrame());
flowScheduler.add(blank500msRoutineEnd());
const trials_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_practiceLoopBegin, trials_practiceLoopScheduler);
flowScheduler.add(trials_practiceLoopScheduler);
flowScheduler.add(trials_practiceLoopEnd);
flowScheduler.add(blank500ms_2RoutineBegin());
flowScheduler.add(blank500ms_2RoutineEachFrame());
flowScheduler.add(blank500ms_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const sound_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sound_loopLoopBegin, sound_loopLoopScheduler);
flowScheduler.add(sound_loopLoopScheduler);
flowScheduler.add(sound_loopLoopEnd);
const dist_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(dist_loopLoopBegin, dist_loopLoopScheduler);
flowScheduler.add(dist_loopLoopScheduler);
flowScheduler.add(dist_loopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'distractors/126375702.thl.png', 'path': 'distractors/126375702.thl.png'},
    {'name': 'sounds/42.wav', 'path': 'sounds/42.wav'},
    {'name': 'distractors/2turtle8.png', 'path': 'distractors/2turtle8.png'},
    {'name': 'sounds/41.wav', 'path': 'sounds/41.wav'},
    {'name': 'distractors/3drumset9.png', 'path': 'distractors/3drumset9.png'},
    {'name': 'distractors/1lock10.png', 'path': 'distractors/1lock10.png'},
    {'name': 'distractors/3elephant10.png', 'path': 'distractors/3elephant10.png'},
    {'name': 'objects/3garbagecan8.png', 'path': 'objects/3garbagecan8.png'},
    {'name': 'sounds/30.wav', 'path': 'sounds/30.wav'},
    {'name': 'sounds/31.wav', 'path': 'sounds/31.wav'},
    {'name': 'distractors/1bowtie1.png', 'path': 'distractors/1bowtie1.png'},
    {'name': 'sounds/37.wav', 'path': 'sounds/37.wav'},
    {'name': 'sounds/17.wav', 'path': 'sounds/17.wav'},
    {'name': 'distractors/3drumset6.png', 'path': 'distractors/3drumset6.png'},
    {'name': 'distractors/1scrunchie8.png', 'path': 'distractors/1scrunchie8.png'},
    {'name': 'objects/2turtle8.png', 'path': 'objects/2turtle8.png'},
    {'name': 'distractors/1computermouse11.png', 'path': 'distractors/1computermouse11.png'},
    {'name': 'distractors/1glove2.png', 'path': 'distractors/1glove2.png'},
    {'name': 'distractors/1giftbow12.png', 'path': 'distractors/1giftbow12.png'},
    {'name': 'distractors/1seashell9.png', 'path': 'distractors/1seashell9.png'},
    {'name': 'distractors/1computermouse2.png', 'path': 'distractors/1computermouse2.png'},
    {'name': 'distractors/1giftbow5.png', 'path': 'distractors/1giftbow5.png'},
    {'name': 'sounds/7.wav', 'path': 'sounds/7.wav'},
    {'name': 'distractors/3motorcycle1.png', 'path': 'distractors/3motorcycle1.png'},
    {'name': 'distractors/1armyguy9.png', 'path': 'distractors/1armyguy9.png'},
    {'name': 'distractors/1lock5.png', 'path': 'distractors/1lock5.png'},
    {'name': 'distractors/1giftbow6.png', 'path': 'distractors/1giftbow6.png'},
    {'name': 'sounds/13.wav', 'path': 'sounds/13.wav'},
    {'name': 'distractors/1armyguy8.png', 'path': 'distractors/1armyguy8.png'},
    {'name': 'distractors/1cellphone3.png', 'path': 'distractors/1cellphone3.png'},
    {'name': 'distractors/1armyguy4.png', 'path': 'distractors/1armyguy4.png'},
    {'name': 'objects/2binocular4.png', 'path': 'objects/2binocular4.png'},
    {'name': 'distractors/1legoman12.png', 'path': 'distractors/1legoman12.png'},
    {'name': 'objects/sock4.png', 'path': 'objects/sock4.png'},
    {'name': 'distractors/3drumset12.png', 'path': 'distractors/3drumset12.png'},
    {'name': 'distractors/1seashell5.png', 'path': 'distractors/1seashell5.png'},
    {'name': 'distractors/1nailpolish6.png', 'path': 'distractors/1nailpolish6.png'},
    {'name': 'distractors/3tricycle8.png', 'path': 'distractors/3tricycle8.png'},
    {'name': 'distractors/3bed11.png', 'path': 'distractors/3bed11.png'},
    {'name': 'sounds/44.wav', 'path': 'sounds/44.wav'},
    {'name': 'distractors/3tent10.png', 'path': 'distractors/3tent10.png'},
    {'name': 'distractors/1seashell12.png', 'path': 'distractors/1seashell12.png'},
    {'name': 'distractors/1cookie2.png', 'path': 'distractors/1cookie2.png'},
    {'name': 'objects/1giftbow1.png', 'path': 'objects/1giftbow1.png'},
    {'name': 'sounds/8.wav', 'path': 'sounds/8.wav'},
    {'name': 'distractors/3gardenswing9.png', 'path': 'distractors/3gardenswing9.png'},
    {'name': 'objects/1computermouse3.png', 'path': 'objects/1computermouse3.png'},
    {'name': 'objects/1christmastreeornamantball7.png', 'path': 'objects/1christmastreeornamantball7.png'},
    {'name': 'distractors/3vacuumcleaner11.png', 'path': 'distractors/3vacuumcleaner11.png'},
    {'name': 'distractors/1giftbow9.png', 'path': 'distractors/1giftbow9.png'},
    {'name': 'distractors/1key7.png', 'path': 'distractors/1key7.png'},
    {'name': 'distractors/1donut9.png', 'path': 'distractors/1donut9.png'},
    {'name': 'objects/1watch2.png', 'path': 'objects/1watch2.png'},
    {'name': 'objects/1pencilsharpener2.png', 'path': 'objects/1pencilsharpener2.png'},
    {'name': 'sounds/27.wav', 'path': 'sounds/27.wav'},
    {'name': 'objects/2robot8.png', 'path': 'objects/2robot8.png'},
    {'name': 'distractors/1bowtie6.png', 'path': 'distractors/1bowtie6.png'},
    {'name': 'sounds/47.wav', 'path': 'sounds/47.wav'},
    {'name': 'distractors/1cellphone1.png', 'path': 'distractors/1cellphone1.png'},
    {'name': 'distractors/3gardenswing1.png', 'path': 'distractors/3gardenswing1.png'},
    {'name': 'sounds/10.wav', 'path': 'sounds/10.wav'},
    {'name': 'objects/1chesshorse3.png', 'path': 'objects/1chesshorse3.png'},
    {'name': 'cond.xlsx', 'path': 'cond.xlsx'},
    {'name': 'objects/3gardenswing9.png', 'path': 'objects/3gardenswing9.png'},
    {'name': 'distractors/1cellphone8.png', 'path': 'distractors/1cellphone8.png'},
    {'name': 'sounds/35.wav', 'path': 'sounds/35.wav'},
    {'name': 'distractors/1key3.png', 'path': 'distractors/1key3.png'},
    {'name': 'objects/3langırt10.png', 'path': 'objects/3langırt10.png'},
    {'name': 'objects/1lipstick6.png', 'path': 'objects/1lipstick6.png'},
    {'name': 'objects/1flask2.png', 'path': 'objects/1flask2.png'},
    {'name': 'distractors/3helicopter3.png', 'path': 'distractors/3helicopter3.png'},
    {'name': 'sounds/28.wav', 'path': 'sounds/28.wav'},
    {'name': 'distractors/1pencilsharpener2.png', 'path': 'distractors/1pencilsharpener2.png'},
    {'name': 'distractors/1computermouse8.png', 'path': 'distractors/1computermouse8.png'},
    {'name': 'distractors/1armyguy6.png', 'path': 'distractors/1armyguy6.png'},
    {'name': 'distractors/126376346.thl.png', 'path': 'distractors/126376346.thl.png'},
    {'name': 'objects/2hat9.png', 'path': 'objects/2hat9.png'},
    {'name': 'distractors/1cellphone7.png', 'path': 'distractors/1cellphone7.png'},
    {'name': 'objects/1nailpolish2.png', 'path': 'objects/1nailpolish2.png'},
    {'name': 'distractors/1lipstick10.png', 'path': 'distractors/1lipstick10.png'},
    {'name': 'sounds/2.wav', 'path': 'sounds/2.wav'},
    {'name': 'objects/2tire2.png', 'path': 'objects/2tire2.png'},
    {'name': 'objects/3ironing7.png', 'path': 'objects/3ironing7.png'},
    {'name': 'distractors/3drumset4.png', 'path': 'distractors/3drumset4.png'},
    {'name': 'distractors/1lock11.png', 'path': 'distractors/1lock11.png'},
    {'name': 'distractors/3tent2.png', 'path': 'distractors/3tent2.png'},
    {'name': 'distractors/3motorcycle10.png', 'path': 'distractors/3motorcycle10.png'},
    {'name': 'distractors/1cupcake3.png', 'path': 'distractors/1cupcake3.png'},
    {'name': 'objects/Atennisball2.png', 'path': 'objects/Atennisball2.png'},
    {'name': 'distractors/1butterfly11.png', 'path': 'distractors/1butterfly11.png'},
    {'name': 'distractors/1scrunchie2.png', 'path': 'distractors/1scrunchie2.png'},
    {'name': 'distractors/1cookie9.png', 'path': 'distractors/1cookie9.png'},
    {'name': 'distractors/2turtle9.png', 'path': 'distractors/2turtle9.png'},
    {'name': 'distractors/3motorcycle5.png', 'path': 'distractors/3motorcycle5.png'},
    {'name': 'distractors/3vacuumcleaner6.png', 'path': 'distractors/3vacuumcleaner6.png'},
    {'name': 'distractors/1cookie10.png', 'path': 'distractors/1cookie10.png'},
    {'name': 'distractors/1lock7.png', 'path': 'distractors/1lock7.png'},
    {'name': 'objects/3manken8.png', 'path': 'objects/3manken8.png'},
    {'name': 'sounds/36.wav', 'path': 'sounds/36.wav'},
    {'name': 'distractors/1watch3.png', 'path': 'distractors/1watch3.png'},
    {'name': 'distractors/3vacuumcleaner5.png', 'path': 'distractors/3vacuumcleaner5.png'},
    {'name': 'distractors/1lock2.png', 'path': 'distractors/1lock2.png'},
    {'name': 'distractors/1watch10.png', 'path': 'distractors/1watch10.png'},
    {'name': 'distractors/AANTICUP4.png', 'path': 'distractors/AANTICUP4.png'},
    {'name': 'distractors/1seashell2.png', 'path': 'distractors/1seashell2.png'},
    {'name': 'distractors/3motorcycle7.png', 'path': 'distractors/3motorcycle7.png'},
    {'name': 'distractors/1cellphone6.png', 'path': 'distractors/1cellphone6.png'},
    {'name': 'objects/3couch7.png', 'path': 'objects/3couch7.png'},
    {'name': 'distractors/B_pear.png', 'path': 'distractors/B_pear.png'},
    {'name': 'sounds/50.wav', 'path': 'sounds/50.wav'},
    {'name': 'sounds/9.wav', 'path': 'sounds/9.wav'},
    {'name': 'objects/2radio8.png', 'path': 'objects/2radio8.png'},
    {'name': 'sounds/12.wav', 'path': 'sounds/12.wav'},
    {'name': 'distractors/3tricycle6.png', 'path': 'distractors/3tricycle6.png'},
    {'name': 'distractors/1seashell3.png', 'path': 'distractors/1seashell3.png'},
    {'name': 'distractors/1lipstick12.png', 'path': 'distractors/1lipstick12.png'},
    {'name': 'distractors/1butterfly10.png', 'path': 'distractors/1butterfly10.png'},
    {'name': 'distractors/1key4.png', 'path': 'distractors/1key4.png'},
    {'name': 'objects/1cellphone6.png', 'path': 'objects/1cellphone6.png'},
    {'name': 'distractors/2turtle5.png', 'path': 'distractors/2turtle5.png'},
    {'name': 'distractors/1legoman6.png', 'path': 'distractors/1legoman6.png'},
    {'name': 'objects/3motorcycle2.png', 'path': 'objects/3motorcycle2.png'},
    {'name': 'distractors/1butterfly9.png', 'path': 'distractors/1butterfly9.png'},
    {'name': 'sounds/38.wav', 'path': 'sounds/38.wav'},
    {'name': 'distractors/3gardenswing7.png', 'path': 'distractors/3gardenswing7.png'},
    {'name': 'distractors/3motorcycle3.png', 'path': 'distractors/3motorcycle3.png'},
    {'name': 'objects/1easteregg_redo2.png', 'path': 'objects/1easteregg_redo2.png'},
    {'name': 'objects/1battery4.png', 'path': 'objects/1battery4.png'},
    {'name': 'objects/1cookie2.png', 'path': 'objects/1cookie2.png'},
    {'name': 'sounds/15.wav', 'path': 'sounds/15.wav'},
    {'name': 'distractors/1donut1.png', 'path': 'distractors/1donut1.png'},
    {'name': 'distractors/3langırt9.png', 'path': 'distractors/3langırt9.png'},
    {'name': 'distractors/1glove4.png', 'path': 'distractors/1glove4.png'},
    {'name': 'distractors/3langırt11.png', 'path': 'distractors/3langırt11.png'},
    {'name': 'distractors/1butterfly12.png', 'path': 'distractors/1butterfly12.png'},
    {'name': 'objects/1compass4.png', 'path': 'objects/1compass4.png'},
    {'name': 'distractors/1bowtie2.png', 'path': 'distractors/1bowtie2.png'},
    {'name': 'distractors/1computermouse7.png', 'path': 'distractors/1computermouse7.png'},
    {'name': 'distractors/3tricycle11.png', 'path': 'distractors/3tricycle11.png'},
    {'name': 'distractors/2radio11.png', 'path': 'distractors/2radio11.png'},
    {'name': 'distractors/1bowtie3.png', 'path': 'distractors/1bowtie3.png'},
    {'name': 'distractors/1cupcake10.png', 'path': 'distractors/1cupcake10.png'},
    {'name': 'objects/1mp3player7.png', 'path': 'objects/1mp3player7.png'},
    {'name': 'sounds/14.wav', 'path': 'sounds/14.wav'},
    {'name': 'distractors/1key6.png', 'path': 'distractors/1key6.png'},
    {'name': 'objects/2stool1.png', 'path': 'objects/2stool1.png'},
    {'name': 'distractors/1scrunchie3.png', 'path': 'distractors/1scrunchie3.png'},
    {'name': 'objects/126375702.png', 'path': 'objects/126375702.png'},
    {'name': 'objects/3wheelchair7.png', 'path': 'objects/3wheelchair7.png'},
    {'name': 'distractors/2radio3.png', 'path': 'distractors/2radio3.png'},
    {'name': 'distractors/1cookie4.png', 'path': 'distractors/1cookie4.png'},
    {'name': 'distractors/1pencilsharpener10.png', 'path': 'distractors/1pencilsharpener10.png'},
    {'name': 'objects/1leaves9.png', 'path': 'objects/1leaves9.png'},
    {'name': 'distractors/3gardenswing3.png', 'path': 'distractors/3gardenswing3.png'},
    {'name': 'objects/2shirt3.png', 'path': 'objects/2shirt3.png'},
    {'name': 'distractors/1pencilsharpener7.png', 'path': 'distractors/1pencilsharpener7.png'},
    {'name': 'sounds/32.wav', 'path': 'sounds/32.wav'},
    {'name': 'distractors/3helicopter8.png', 'path': 'distractors/3helicopter8.png'},
    {'name': 'sounds/49.wav', 'path': 'sounds/49.wav'},
    {'name': 'distractors/1butterfly5.png', 'path': 'distractors/1butterfly5.png'},
    {'name': 'distractors/1scrunchie7.png', 'path': 'distractors/1scrunchie7.png'},
    {'name': 'distractors/1pencilsharpener1.png', 'path': 'distractors/1pencilsharpener1.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginningClock;
var Exp_beginning;
var key_resp;
var show_imagesClock;
var polygon_outside;
var polygon_inside;
var Stim_image;
var blank500msClock;
var fixation;
var practice_blockClock;
var polygon_outside2;
var polygon_inside2;
var text_3;
var image_2;
var mouse_4;
var feedbackClock;
var polygon_outside3;
var polygon_inside3;
var polygon;
var feedback_Txt;
var image_3;
var polygon_4;
var text_10;
var blank500ms_2Clock;
var text_2;
var text_PromptClock;
var filler1;
var targetText;
var trialClock;
var instr;
var text;
var sound1Clock;
var ret_cue;
var sound_3;
var key_resp_2;
var sound2Clock;
var sound_2;
var dual_resp2;
var fixation_2Clock;
var text_7;
var ret_testClock;
var polygon_outside4;
var polygon_inside4;
var text_8;
var mouse_6;
var feedback2Clock;
var polygon_outside6;
var polygon_inside6;
var polygon_2;
var text_9;
var text_11;
var ITIClock;
var text_4;
var dist_imgClock;
var ret;
var text_5;
var dist2Clock;
var image_4;
var image_5;
var image_6;
var image_7;
var image_8;
var image_9;
var ret_dist_testClock;
var polygon_outside5;
var polygon_inside5;
var mouse_7;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "beginning"
  beginningClock = new util.Clock();
  Exp_beginning = new visual.TextStim({
    win: psychoJS.window,
    name: 'Exp_beginning',
    text: 'Welcome to the experiment\nPress space to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "show_images"
  show_imagesClock = new util.Clock();
  polygon_outside = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside', 
    edges: 100, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside', 
    edges: 100, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  Stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "blank500ms"
  blank500msClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_block"
  practice_blockClock = new util.Clock();
  polygon_outside2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside2', 
    edges: 999, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside2', 
    edges: 999, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  polygon_outside3 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside3', 
    edges: 99, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside3 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside3', 
    edges: 999, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  polygon = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon', 
    edges: 99, size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  feedback_Txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_Txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  polygon_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_4', 
    edges: 999, size:[0.02, 0.02],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '°',
    font: 'Arial',
    units: undefined, 
    pos: [0.05, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "blank500ms_2"
  blank500ms_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "text_Prompt"
  text_PromptClock = new util.Clock();
  filler1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'filler1',
    text: 'Calculate:\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  targetText = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr',
    text: 'Type the answer below, and press enter\n',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "blank500ms"
  blank500msClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "sound1"
  sound1Clock = new util.Clock();
  ret_cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ret_cue', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.5,
    });
  sound_3.setVolume(1);
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sound2"
  sound2Clock = new util.Clock();
  sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.5,
    });
  sound_2.setVolume(1);
  dual_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation_2"
  fixation_2Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ret_test"
  ret_testClock = new util.Clock();
  polygon_outside4 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside4', 
    edges: 999, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside4 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside4', 
    edges: 99, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback2"
  feedback2Clock = new util.Clock();
  polygon_outside6 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside6', 
    edges: 999, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside6 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside6', 
    edges: 999, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  polygon_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_2', 
    edges: 99, size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '°',
    font: 'Arial',
    units: undefined, 
    pos: [0.05, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '+\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "dist_img"
  dist_imgClock = new util.Clock();
  ret = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ret', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "dist2"
  dist2Clock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "ret_dist_test"
  ret_dist_testClock = new util.Clock();
  polygon_outside5 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside5', 
    edges: 999, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside5 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside5', 
    edges: 99, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback2"
  feedback2Clock = new util.Clock();
  polygon_outside6 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_outside6', 
    edges: 999, size:[0.82, 0.82],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 0.5, depth: 0, interpolate: true,
  });
  
  polygon_inside6 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_inside6', 
    edges: 999, size:[0.78, 0.78],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  polygon_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_2', 
    edges: 99, size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '°',
    font: 'Arial',
    units: undefined, 
    pos: [0.05, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
var beginningComponents;
function beginningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'beginning'-------
    t = 0;
    beginningClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    beginningComponents = [];
    beginningComponents.push(Exp_beginning);
    beginningComponents.push(key_resp);
    
    for (const thisComponent of beginningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function beginningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'beginning'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = beginningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Exp_beginning* updates
    if (t >= 0.0 && Exp_beginning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exp_beginning.tStart = t;  // (not accounting for frame time here)
      Exp_beginning.frameNStart = frameN;  // exact frame index
      
      Exp_beginning.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'beginning'-------
    for (const thisComponent of beginningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "beginning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_loop;
var currentLoop;
function trials_loopLoopBegin(trials_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cond.xlsx',
    seed: undefined, name: 'trials_loop'
  });
  psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
  currentLoop = trials_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_loop of trials_loop) {
    const snapshot = trials_loop.getSnapshot();
    trials_loopLoopScheduler.add(importConditions(snapshot));
    trials_loopLoopScheduler.add(show_imagesRoutineBegin(snapshot));
    trials_loopLoopScheduler.add(show_imagesRoutineEachFrame(snapshot));
    trials_loopLoopScheduler.add(show_imagesRoutineEnd(snapshot));
    trials_loopLoopScheduler.add(endLoopIteration(trials_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_loopLoopEnd() {
  psychoJS.experiment.removeLoop(trials_loop);

  return Scheduler.Event.NEXT;
}


var trials_practice;
function trials_practiceLoopBegin(trials_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cond.xlsx',
    seed: undefined, name: 'trials_practice'
  });
  psychoJS.experiment.addLoop(trials_practice); // add the loop to the experiment
  currentLoop = trials_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_practice of trials_practice) {
    const snapshot = trials_practice.getSnapshot();
    trials_practiceLoopScheduler.add(importConditions(snapshot));
    trials_practiceLoopScheduler.add(practice_blockRoutineBegin(snapshot));
    trials_practiceLoopScheduler.add(practice_blockRoutineEachFrame(snapshot));
    trials_practiceLoopScheduler.add(practice_blockRoutineEnd(snapshot));
    trials_practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
    trials_practiceLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    trials_practiceLoopScheduler.add(feedbackRoutineEnd(snapshot));
    trials_practiceLoopScheduler.add(endLoopIteration(trials_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(trials_practice);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cond.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(text_PromptRoutineBegin(snapshot));
    trialsLoopScheduler.add(text_PromptRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(text_PromptRoutineEnd(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(blank500msRoutineBegin(snapshot));
    trialsLoopScheduler.add(blank500msRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(blank500msRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var sound_loop;
function sound_loopLoopBegin(sound_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  sound_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cond.xlsx',
    seed: undefined, name: 'sound_loop'
  });
  psychoJS.experiment.addLoop(sound_loop); // add the loop to the experiment
  currentLoop = sound_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisSound_loop of sound_loop) {
    const snapshot = sound_loop.getSnapshot();
    sound_loopLoopScheduler.add(importConditions(snapshot));
    sound_loopLoopScheduler.add(sound1RoutineBegin(snapshot));
    sound_loopLoopScheduler.add(sound1RoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(sound1RoutineEnd(snapshot));
    sound_loopLoopScheduler.add(sound2RoutineBegin(snapshot));
    sound_loopLoopScheduler.add(sound2RoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(sound2RoutineEnd(snapshot));
    sound_loopLoopScheduler.add(fixation_2RoutineBegin(snapshot));
    sound_loopLoopScheduler.add(fixation_2RoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(fixation_2RoutineEnd(snapshot));
    sound_loopLoopScheduler.add(ret_testRoutineBegin(snapshot));
    sound_loopLoopScheduler.add(ret_testRoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(ret_testRoutineEnd(snapshot));
    sound_loopLoopScheduler.add(feedback2RoutineBegin(snapshot));
    sound_loopLoopScheduler.add(feedback2RoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(feedback2RoutineEnd(snapshot));
    sound_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
    sound_loopLoopScheduler.add(ITIRoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
    sound_loopLoopScheduler.add(endLoopIteration(sound_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function sound_loopLoopEnd() {
  psychoJS.experiment.removeLoop(sound_loop);

  return Scheduler.Event.NEXT;
}


var dist_loop;
function dist_loopLoopBegin(dist_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  dist_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'cond.xlsx',
    seed: undefined, name: 'dist_loop'
  });
  psychoJS.experiment.addLoop(dist_loop); // add the loop to the experiment
  currentLoop = dist_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisDist_loop of dist_loop) {
    const snapshot = dist_loop.getSnapshot();
    dist_loopLoopScheduler.add(importConditions(snapshot));
    dist_loopLoopScheduler.add(dist_imgRoutineBegin(snapshot));
    dist_loopLoopScheduler.add(dist_imgRoutineEachFrame(snapshot));
    dist_loopLoopScheduler.add(dist_imgRoutineEnd(snapshot));
    dist_loopLoopScheduler.add(dist2RoutineBegin(snapshot));
    dist_loopLoopScheduler.add(dist2RoutineEachFrame(snapshot));
    dist_loopLoopScheduler.add(dist2RoutineEnd(snapshot));
    dist_loopLoopScheduler.add(ret_dist_testRoutineBegin(snapshot));
    dist_loopLoopScheduler.add(ret_dist_testRoutineEachFrame(snapshot));
    dist_loopLoopScheduler.add(ret_dist_testRoutineEnd(snapshot));
    dist_loopLoopScheduler.add(feedback2RoutineBegin(snapshot));
    dist_loopLoopScheduler.add(feedback2RoutineEachFrame(snapshot));
    dist_loopLoopScheduler.add(feedback2RoutineEnd(snapshot));
    dist_loopLoopScheduler.add(endLoopIteration(dist_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function dist_loopLoopEnd() {
  psychoJS.experiment.removeLoop(dist_loop);

  return Scheduler.Event.NEXT;
}


var show_imagesComponents;
function show_imagesRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_images'-------
    t = 0;
    show_imagesClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    Stim_image.setPos([object_location_x, object_location_y]);
    Stim_image.setImage(objects);
    // keep track of which components have finished
    show_imagesComponents = [];
    show_imagesComponents.push(polygon_outside);
    show_imagesComponents.push(polygon_inside);
    show_imagesComponents.push(Stim_image);
    
    for (const thisComponent of show_imagesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function show_imagesRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_images'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = show_imagesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside* updates
    if (t >= 0.0 && polygon_outside.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside.tStart = t;  // (not accounting for frame time here)
      polygon_outside.frameNStart = frameN;  // exact frame index
      
      polygon_outside.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_outside.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_outside.setAutoDraw(false);
    }
    
    // *polygon_inside* updates
    if (t >= 0.0 && polygon_inside.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside.tStart = t;  // (not accounting for frame time here)
      polygon_inside.frameNStart = frameN;  // exact frame index
      
      polygon_inside.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_inside.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_inside.setAutoDraw(false);
    }
    
    // *Stim_image* updates
    if (t >= 0.0 && Stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim_image.tStart = t;  // (not accounting for frame time here)
      Stim_image.frameNStart = frameN;  // exact frame index
      
      Stim_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stim_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of show_imagesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_imagesRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_images'-------
    for (const thisComponent of show_imagesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var blank500msComponents;
function blank500msRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blank500ms'-------
    t = 0;
    blank500msClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank500msComponents = [];
    blank500msComponents.push(fixation);
    
    for (const thisComponent of blank500msComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function blank500msRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blank500ms'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = blank500msClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500msComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500msRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blank500ms'-------
    for (const thisComponent of blank500msComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var practice_blockComponents;
function practice_blockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_block'-------
    t = 0;
    practice_blockClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image_2.setImage(study_objects);
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    practice_blockComponents = [];
    practice_blockComponents.push(polygon_outside2);
    practice_blockComponents.push(polygon_inside2);
    practice_blockComponents.push(text_3);
    practice_blockComponents.push(image_2);
    practice_blockComponents.push(mouse_4);
    
    for (const thisComponent of practice_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var _mouseButtons;
function practice_blockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_block'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside2* updates
    if (t >= 0.0 && polygon_outside2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside2.tStart = t;  // (not accounting for frame time here)
      polygon_outside2.frameNStart = frameN;  // exact frame index
      
      polygon_outside2.setAutoDraw(true);
    }

    
    // *polygon_inside2* updates
    if (t >= 0.0 && polygon_inside2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside2.tStart = t;  // (not accounting for frame time here)
      polygon_inside2.frameNStart = frameN;  // exact frame index
      
      polygon_inside2.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *image_2* updates
    if (t >= 1.5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 1.5 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_blockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function practice_blockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_block'-------
    for (const thisComponent of practice_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_4.getPos();
    _mouseButtons = mouse_4.getPressed();
    psychoJS.experiment.addData('mouse_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_4.rightButton', _mouseButtons[2]);
    // the Routine "practice_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var x;
var y;
var resp_degree;
var actual_degree;
var degree_difference;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    x = _mouseXYs[0]
    y = _mouseXYs[1]
    resp_degree = ((Math.atan2(x, y) / Math.PI) * 180);
    actual_degree = ((Math.atan2(study_location_x, study_location_y) / Math.PI) * 180);
    degree_difference = Math.round((resp_degree - actual_degree), 2);
    degree_difference = Math.abs(degree_difference);
    if ((degree_difference > 180)) {
        degree_difference = Math.round((360 - degree_difference),0);
    } else {
        degree_difference = Math.round(degree_difference);
    }
    
    polygon.setPos([x, y]);
    feedback_Txt.setPos([0, 0]);
    feedback_Txt.setText(degree_difference);
    image_3.setPos([study_location_x, study_location_y]);
    image_3.setImage(study_objects);
    polygon_4.setPos([study_location_x, study_location_y]);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(polygon_outside3);
    feedbackComponents.push(polygon_inside3);
    feedbackComponents.push(polygon);
    feedbackComponents.push(feedback_Txt);
    feedbackComponents.push(image_3);
    feedbackComponents.push(polygon_4);
    feedbackComponents.push(text_10);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside3* updates
    if (t >= 0.0 && polygon_outside3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside3.tStart = t;  // (not accounting for frame time here)
      polygon_outside3.frameNStart = frameN;  // exact frame index
      
      polygon_outside3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_outside3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_outside3.setAutoDraw(false);
    }
    
    // *polygon_inside3* updates
    if (t >= 0.0 && polygon_inside3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside3.tStart = t;  // (not accounting for frame time here)
      polygon_inside3.frameNStart = frameN;  // exact frame index
      
      polygon_inside3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_inside3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_inside3.setAutoDraw(false);
    }
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    
    // *feedback_Txt* updates
    if (t >= 0.0 && feedback_Txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_Txt.tStart = t;  // (not accounting for frame time here)
      feedback_Txt.frameNStart = frameN;  // exact frame index
      
      feedback_Txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_Txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_Txt.setAutoDraw(false);
    }
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_4.setAutoDraw(false);
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var blank500ms_2Components;
function blank500ms_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blank500ms_2'-------
    t = 0;
    blank500ms_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank500ms_2Components = [];
    blank500ms_2Components.push(text_2);
    
    for (const thisComponent of blank500ms_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function blank500ms_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blank500ms_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = blank500ms_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500ms_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500ms_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blank500ms_2'-------
    for (const thisComponent of blank500ms_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var text_PromptComponents;
function text_PromptRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'text_Prompt'-------
    t = 0;
    text_PromptClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    targetText.setText(calc);
    // keep track of which components have finished
    text_PromptComponents = [];
    text_PromptComponents.push(filler1);
    text_PromptComponents.push(targetText);
    
    for (const thisComponent of text_PromptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function text_PromptRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'text_Prompt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = text_PromptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *filler1* updates
    if (t >= 0.0 && filler1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      filler1.tStart = t;  // (not accounting for frame time here)
      filler1.frameNStart = frameN;  // exact frame index
      
      filler1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (filler1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      filler1.setAutoDraw(false);
    }
    
    // *targetText* updates
    if (t >= 0.0 && targetText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetText.tStart = t;  // (not accounting for frame time here)
      targetText.frameNStart = frameN;  // exact frame index
      
      targetText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (targetText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      targetText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of text_PromptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function text_PromptRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'text_Prompt'-------
    for (const thisComponent of text_PromptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var modify;
var event;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    modify = false;
    text.text = "";
    event=psychoJS.eventManager;
    event.clearEvents("keyboard");
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(instr);
    trialComponents.push(text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var keys;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr* updates
    if (t >= 0.0 && instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr.tStart = t;  // (not accounting for frame time here)
      instr.frameNStart = frameN;  // exact frame index
      
      instr.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (_pj.in_es6("space", keys)) {
            text.text = (text.text + " ");
        } else {
            if (_pj.in_es6("backspace", keys)) {
                text.text = text.text.slice(0, (- 1));
            } else {
                if ((_pj.in_es6("lshift", keys) || _pj.in_es6("rshift", keys))) {
                    modify = true;
                } else {
                    if (_pj.in_es6("return", keys)) {
                        continueRoutine = false;
                    } else {
                        if (modify) {
                            text.text = (text.text + keys[0].upper());
                            modify = false;
                        } else {
                            text.text = (text.text + keys[0]);
                        }
                    }
                }
            }
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("typedWord", text.text)
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var sound1Components;
function sound1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'sound1'-------
    t = 0;
    sound1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.700000);
    // update component parameters for each repeat
    ret_cue.setImage(objects);
    sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: sounds1,
    secs: 1.5,
    });
    sound_3.secs=1.5;
    sound_3.setVolume(1);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    sound1Components = [];
    sound1Components.push(ret_cue);
    sound1Components.push(sound_3);
    sound1Components.push(key_resp_2);
    
    for (const thisComponent of sound1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function sound1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'sound1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = sound1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ret_cue* updates
    if (t >= 0.0 && ret_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ret_cue.tStart = t;  // (not accounting for frame time here)
      ret_cue.frameNStart = frameN;  // exact frame index
      
      ret_cue.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ret_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ret_cue.setAutoDraw(false);
    }
    // start/stop sound_3
    if (t >= 0.2 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.2 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.5 > 0.5) {  sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *key_resp_2* updates
    if (t >= 0.2 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.2 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sound1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sound1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'sound1'-------
    for (const thisComponent of sound1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_3.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var _dual_resp2_allKeys;
var sound2Components;
function sound2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'sound2'-------
    t = 0;
    sound2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: sounds2,
    secs: 1.5,
    });
    sound_2.secs=1.5;
    sound_2.setVolume(1);
    dual_resp2.keys = undefined;
    dual_resp2.rt = undefined;
    _dual_resp2_allKeys = [];
    // keep track of which components have finished
    sound2Components = [];
    sound2Components.push(sound_2);
    sound2Components.push(dual_resp2);
    
    for (const thisComponent of sound2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function sound2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'sound2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = sound2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_2
    if (t >= 0 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1.5 > 0.5) {  sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *dual_resp2* updates
    if (t >= 0 && dual_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dual_resp2.tStart = t;  // (not accounting for frame time here)
      dual_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dual_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dual_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dual_resp2.clearEvents(); });
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dual_resp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dual_resp2.status = PsychoJS.Status.FINISHED;
  }

    if (dual_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = dual_resp2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _dual_resp2_allKeys = _dual_resp2_allKeys.concat(theseKeys);
      if (_dual_resp2_allKeys.length > 0) {
        dual_resp2.keys = _dual_resp2_allKeys[_dual_resp2_allKeys.length - 1].name;  // just the last key pressed
        dual_resp2.rt = _dual_resp2_allKeys[_dual_resp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of sound2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sound2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'sound2'-------
    for (const thisComponent of sound2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_2.stop();  // ensure sound has stopped at end of routine
    psychoJS.experiment.addData('dual_resp2.keys', dual_resp2.keys);
    if (typeof dual_resp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dual_resp2.rt', dual_resp2.rt);
        routineTimer.reset();
        }
    
    dual_resp2.stop();
    return Scheduler.Event.NEXT;
  };
}


var fixation_2Components;
function fixation_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixation_2'-------
    t = 0;
    fixation_2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_2Components = [];
    fixation_2Components.push(text_7);
    
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function fixation_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixation_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixation_2'-------
    for (const thisComponent of fixation_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ret_testComponents;
function ret_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ret_test'-------
    t = 0;
    ret_testClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ret_testComponents = [];
    ret_testComponents.push(polygon_outside4);
    ret_testComponents.push(polygon_inside4);
    ret_testComponents.push(text_8);
    ret_testComponents.push(mouse_6);
    
    for (const thisComponent of ret_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ret_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ret_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ret_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside4* updates
    if (t >= 0.0 && polygon_outside4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside4.tStart = t;  // (not accounting for frame time here)
      polygon_outside4.frameNStart = frameN;  // exact frame index
      
      polygon_outside4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_outside4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_outside4.setAutoDraw(false);
    }
    
    // *polygon_inside4* updates
    if (t >= 0.0 && polygon_inside4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside4.tStart = t;  // (not accounting for frame time here)
      polygon_inside4.frameNStart = frameN;  // exact frame index
      
      polygon_inside4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_inside4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_inside4.setAutoDraw(false);
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ret_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ret_test'-------
    for (const thisComponent of ret_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_6.getPos();
    _mouseButtons = mouse_6.getPressed();
    psychoJS.experiment.addData('mouse_6.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_6.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_6.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_6.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_6.rightButton', _mouseButtons[2]);
    // the Routine "ret_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback2Components;
function feedback2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback2'-------
    t = 0;
    feedback2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    x = _mouseXYs[0]
    y = _mouseXYs[1]
    resp_degree = ((Math.atan2(x, y) / Math.PI) * 180);
    actual_degree = ((Math.atan2(object_location_x, object_location_y) / Math.PI) * 180);
    degree_difference = Math.round((resp_degree - actual_degree), 2);
    degree_difference = Math.abs(degree_difference);
    if ((degree_difference > 180)) {
        degree_difference = Math.round((360 - degree_difference),0);
    } else {
        degree_difference = Math.round(degree_difference);
    }
    
    polygon_2.setPos([x, y]);
    text_9.setText(degree_difference);
    // keep track of which components have finished
    feedback2Components = [];
    feedback2Components.push(polygon_outside6);
    feedback2Components.push(polygon_inside6);
    feedback2Components.push(polygon_2);
    feedback2Components.push(text_9);
    feedback2Components.push(text_11);
    
    for (const thisComponent of feedback2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedback2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedback2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside6* updates
    if (t >= 0.0 && polygon_outside6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside6.tStart = t;  // (not accounting for frame time here)
      polygon_outside6.frameNStart = frameN;  // exact frame index
      
      polygon_outside6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_outside6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_outside6.setAutoDraw(false);
    }
    
    // *polygon_inside6* updates
    if (t >= 0.0 && polygon_inside6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside6.tStart = t;  // (not accounting for frame time here)
      polygon_inside6.frameNStart = frameN;  // exact frame index
      
      polygon_inside6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_inside6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_inside6.setAutoDraw(false);
    }
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback2'-------
    for (const thisComponent of feedback2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(text_4);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ITI'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ITI'-------
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var dist_imgComponents;
function dist_imgRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dist_img'-------
    t = 0;
    dist_imgClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    ret.setImage(objects);
    // keep track of which components have finished
    dist_imgComponents = [];
    dist_imgComponents.push(ret);
    dist_imgComponents.push(text_5);
    
    for (const thisComponent of dist_imgComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function dist_imgRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dist_img'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = dist_imgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ret* updates
    if (t >= 0.0 && ret.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ret.tStart = t;  // (not accounting for frame time here)
      ret.frameNStart = frameN;  // exact frame index
      
      ret.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ret.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ret.setAutoDraw(false);
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dist_imgComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dist_imgRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dist_img'-------
    for (const thisComponent of dist_imgComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var dist2Components;
function dist2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dist2'-------
    t = 0;
    dist2Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    image_4.setPos([dist1_location_x, dist1_location_y]);
    image_4.setImage(dist1);
    image_5.setPos([dist2_location_x, dist2_location_y]);
    image_5.setImage(dist2);
    image_6.setPos([dist3_location_x, dist3_location_y]);
    image_6.setImage(dist3);
    image_7.setPos([dist4_location_x, dist4_location_y]);
    image_7.setImage(dist4);
    image_8.setPos([dist5_location_x, dist5_location_y]);
    image_8.setImage(dist5);
    image_9.setPos([dist6_location_x, dist6_location_y]);
    image_9.setImage(dist6);
    // keep track of which components have finished
    dist2Components = [];
    dist2Components.push(image_4);
    dist2Components.push(image_5);
    dist2Components.push(image_6);
    dist2Components.push(image_7);
    dist2Components.push(image_8);
    dist2Components.push(image_9);
    
    for (const thisComponent of dist2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function dist2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dist2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = dist2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // *image_5* updates
    if (t >= 0.5 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_5.setAutoDraw(false);
    }
    
    // *image_6* updates
    if (t >= 1 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_6.setAutoDraw(false);
    }
    
    // *image_7* updates
    if (t >= 1.5 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }

    frameRemains = 1.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_7.setAutoDraw(false);
    }
    
    // *image_8* updates
    if (t >= 2 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_8.setAutoDraw(false);
    }
    
    // *image_9* updates
    if (t >= 2.5 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    frameRemains = 2.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_9.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dist2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dist2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dist2'-------
    for (const thisComponent of dist2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ret_dist_testComponents;
function ret_dist_testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ret_dist_test'-------
    t = 0;
    ret_dist_testClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.250000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_7
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ret_dist_testComponents = [];
    ret_dist_testComponents.push(polygon_outside5);
    ret_dist_testComponents.push(polygon_inside5);
    ret_dist_testComponents.push(mouse_7);
    
    for (const thisComponent of ret_dist_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ret_dist_testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ret_dist_test'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ret_dist_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_outside5* updates
    if (t >= 0.0 && polygon_outside5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_outside5.tStart = t;  // (not accounting for frame time here)
      polygon_outside5.frameNStart = frameN;  // exact frame index
      
      polygon_outside5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_outside5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_outside5.setAutoDraw(false);
    }
    
    // *polygon_inside5* updates
    if (t >= 0.0 && polygon_inside5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_inside5.tStart = t;  // (not accounting for frame time here)
      polygon_inside5.frameNStart = frameN;  // exact frame index
      
      polygon_inside5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_inside5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_inside5.setAutoDraw(false);
    }
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_7.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_dist_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ret_dist_testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ret_dist_test'-------
    for (const thisComponent of ret_dist_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_7.getPos();
    _mouseButtons = mouse_7.getPressed();
    psychoJS.experiment.addData('mouse_7.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_7.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_7.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_7.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_7.rightButton', _mouseButtons[2]);
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
