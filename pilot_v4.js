/***************** 
 * Pilot_V4 Test *
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
let expName = 'pilot_v4';  // from the Builder filename that created this script
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
    {'name': 'distractors/3motorcycle5.png', 'path': 'distractors/3motorcycle5.png'},
    {'name': 'objects/2watergun16.png', 'path': 'objects/2watergun16.png'},
    {'name': 'distractors/3helicopter7.png', 'path': 'distractors/3helicopter7.png'},
    {'name': 'distractors/1bowtie3.png', 'path': 'distractors/1bowtie3.png'},
    {'name': 'distractors/3vacuumcleaner10.png', 'path': 'distractors/3vacuumcleaner10.png'},
    {'name': 'objects/3washer3.png', 'path': 'objects/3washer3.png'},
    {'name': 'distractors/1glove3.png', 'path': 'distractors/1glove3.png'},
    {'name': 'sounds/28.wav', 'path': 'sounds/28.wav'},
    {'name': 'distractors/3garbagecan5.png', 'path': 'distractors/3garbagecan5.png'},
    {'name': 'distractors/1legoman1.png', 'path': 'distractors/1legoman1.png'},
    {'name': 'distractors/1lipstick4.png', 'path': 'distractors/1lipstick4.png'},
    {'name': 'objects/Atennisball2.png', 'path': 'objects/Atennisball2.png'},
    {'name': 'distractors/1nailpolish7.png', 'path': 'distractors/1nailpolish7.png'},
    {'name': 'distractors/1nailpolish12.png', 'path': 'distractors/1nailpolish12.png'},
    {'name': 'distractors/1glove6.png', 'path': 'distractors/1glove6.png'},
    {'name': 'sounds/19.wav', 'path': 'sounds/19.wav'},
    {'name': 'sounds/2.wav', 'path': 'sounds/2.wav'},
    {'name': 'distractors/1bowtie11.png', 'path': 'distractors/1bowtie11.png'},
    {'name': 'sounds/34.wav', 'path': 'sounds/34.wav'},
    {'name': 'objects/3tent4.png', 'path': 'objects/3tent4.png'},
    {'name': 'distractors/3vacuumcleaner4.png', 'path': 'distractors/3vacuumcleaner4.png'},
    {'name': 'distractors/1cupcake3.png', 'path': 'distractors/1cupcake3.png'},
    {'name': 'distractors/1nailpolish5.png', 'path': 'distractors/1nailpolish5.png'},
    {'name': 'distractors/3motorcycle3.png', 'path': 'distractors/3motorcycle3.png'},
    {'name': 'distractors/3couch2.png', 'path': 'distractors/3couch2.png'},
    {'name': 'distractors/3vantilator1.png', 'path': 'distractors/3vantilator1.png'},
    {'name': 'objects/2umbrella4.png', 'path': 'objects/2umbrella4.png'},
    {'name': 'sounds/43.wav', 'path': 'sounds/43.wav'},
    {'name': 'distractors/1key7.png', 'path': 'distractors/1key7.png'},
    {'name': 'distractors/1watch12.png', 'path': 'distractors/1watch12.png'},
    {'name': 'distractors/2radio7.png', 'path': 'distractors/2radio7.png'},
    {'name': 'objects/1donut5.png', 'path': 'objects/1donut5.png'},
    {'name': 'objects/1lipstick6.png', 'path': 'objects/1lipstick6.png'},
    {'name': 'objects/1perfumebottle12.png', 'path': 'objects/1perfumebottle12.png'},
    {'name': 'distractors/2turtle9.png', 'path': 'distractors/2turtle9.png'},
    {'name': 'sounds/39.wav', 'path': 'sounds/39.wav'},
    {'name': 'distractors/1butterfly10.png', 'path': 'distractors/1butterfly10.png'},
    {'name': 'distractors/2radio9.png', 'path': 'distractors/2radio9.png'},
    {'name': 'distractors/1key1.png', 'path': 'distractors/1key1.png'},
    {'name': 'distractors/1butterfly7.png', 'path': 'distractors/1butterfly7.png'},
    {'name': 'distractors/1giftbow3.png', 'path': 'distractors/1giftbow3.png'},
    {'name': 'distractors/2turtle14.png', 'path': 'distractors/2turtle14.png'},
    {'name': 'distractors/2radio1.png', 'path': 'distractors/2radio1.png'},
    {'name': 'objects/3manken8.png', 'path': 'objects/3manken8.png'},
    {'name': 'distractors/1cupcake5.png', 'path': 'distractors/1cupcake5.png'},
    {'name': 'objects/1giftbow1.png', 'path': 'objects/1giftbow1.png'},
    {'name': 'distractors/1butterfly4.png', 'path': 'distractors/1butterfly4.png'},
    {'name': 'distractors/1key3.png', 'path': 'distractors/1key3.png'},
    {'name': 'distractors/1seashell12.png', 'path': 'distractors/1seashell12.png'},
    {'name': 'distractors/1legoman2.png', 'path': 'distractors/1legoman2.png'},
    {'name': 'distractors/1scrunchie2.png', 'path': 'distractors/1scrunchie2.png'},
    {'name': 'objects/3langırt10.png', 'path': 'objects/3langırt10.png'},
    {'name': 'distractors/3vacuumcleaner7.png', 'path': 'distractors/3vacuumcleaner7.png'},
    {'name': 'distractors/1nailpolish11.png', 'path': 'distractors/1nailpolish11.png'},
    {'name': 'distractors/3bed2.png', 'path': 'distractors/3bed2.png'},
    {'name': 'distractors/3bed11.png', 'path': 'distractors/3bed11.png'},
    {'name': 'distractors/1scrunchie12.png', 'path': 'distractors/1scrunchie12.png'},
    {'name': 'distractors/1cupcake6.png', 'path': 'distractors/1cupcake6.png'},
    {'name': 'distractors/3gardenswing1.png', 'path': 'distractors/3gardenswing1.png'},
    {'name': 'distractors/2turtle7.png', 'path': 'distractors/2turtle7.png'},
    {'name': 'distractors/1seashell2.png', 'path': 'distractors/1seashell2.png'},
    {'name': 'objects/2recordplayer14.png', 'path': 'objects/2recordplayer14.png'},
    {'name': 'distractors/1seashell7.png', 'path': 'distractors/1seashell7.png'},
    {'name': 'distractors/3helicopter6.png', 'path': 'distractors/3helicopter6.png'},
    {'name': 'cond.xlsx', 'path': 'cond.xlsx'},
    {'name': 'distractors/3langırt7.png', 'path': 'distractors/3langırt7.png'},
    {'name': 'distractors/1nailpolish4.png', 'path': 'distractors/1nailpolish4.png'},
    {'name': 'distractors/1key10.png', 'path': 'distractors/1key10.png'},
    {'name': 'distractors/2turtle4.png', 'path': 'distractors/2turtle4.png'},
    {'name': 'distractors/1computermouse9.png', 'path': 'distractors/1computermouse9.png'},
    {'name': 'objects/2orifan6.png', 'path': 'objects/2orifan6.png'},
    {'name': 'distractors/1pencilsharpener9.png', 'path': 'distractors/1pencilsharpener9.png'},
    {'name': 'distractors/1armyguy8.png', 'path': 'distractors/1armyguy8.png'},
    {'name': 'distractors/1cookie12.png', 'path': 'distractors/1cookie12.png'},
    {'name': 'distractors/1lipstick10.png', 'path': 'distractors/1lipstick10.png'},
    {'name': 'sounds/35.wav', 'path': 'sounds/35.wav'},
    {'name': 'distractors/1seashell6.png', 'path': 'distractors/1seashell6.png'},
    {'name': 'distractors/3drumset6.png', 'path': 'distractors/3drumset6.png'},
    {'name': 'objects/2greenplant11.png', 'path': 'objects/2greenplant11.png'},
    {'name': 'sounds/50.wav', 'path': 'sounds/50.wav'},
    {'name': 'distractors/3motorcycle11.png', 'path': 'distractors/3motorcycle11.png'},
    {'name': 'distractors/2turtle2.png', 'path': 'distractors/2turtle2.png'},
    {'name': 'distractors/1seashell1.png', 'path': 'distractors/1seashell1.png'},
    {'name': 'distractors/1watch1.png', 'path': 'distractors/1watch1.png'},
    {'name': 'distractors/1cupcake12.png', 'path': 'distractors/1cupcake12.png'},
    {'name': 'distractors/1cookie11.png', 'path': 'distractors/1cookie11.png'},
    {'name': 'distractors/1pencilsharpener6.png', 'path': 'distractors/1pencilsharpener6.png'},
    {'name': 'distractors/1pencilsharpener11.png', 'path': 'distractors/1pencilsharpener11.png'},
    {'name': 'distractors/3motorcycle4.png', 'path': 'distractors/3motorcycle4.png'},
    {'name': 'distractors/1cookie10.png', 'path': 'distractors/1cookie10.png'},
    {'name': 'distractors/1lock9.png', 'path': 'distractors/1lock9.png'},
    {'name': 'distractors/3drumset7.png', 'path': 'distractors/3drumset7.png'},
    {'name': 'objects/126375702.png', 'path': 'objects/126375702.png'},
    {'name': 'sounds/24.wav', 'path': 'sounds/24.wav'},
    {'name': 'distractors/3langırt10.png', 'path': 'distractors/3langırt10.png'},
    {'name': 'distractors/2turtle6.png', 'path': 'distractors/2turtle6.png'},
    {'name': 'distractors/3couch9.png', 'path': 'distractors/3couch9.png'},
    {'name': 'objects/3fridge10.png', 'path': 'objects/3fridge10.png'},
    {'name': 'distractors/1pencilsharpener1.png', 'path': 'distractors/1pencilsharpener1.png'},
    {'name': 'distractors/1donut3.png', 'path': 'distractors/1donut3.png'},
    {'name': 'distractors/1pencilsharpener8.png', 'path': 'distractors/1pencilsharpener8.png'},
    {'name': 'distractors/1computermouse3.png', 'path': 'distractors/1computermouse3.png'},
    {'name': 'distractors/3bed1.png', 'path': 'distractors/3bed1.png'},
    {'name': 'distractors/3tricycle3.png', 'path': 'distractors/3tricycle3.png'},
    {'name': 'distractors/1computermouse7.png', 'path': 'distractors/1computermouse7.png'},
    {'name': 'distractors/3couch10.png', 'path': 'distractors/3couch10.png'},
    {'name': 'distractors/1butterfly8.png', 'path': 'distractors/1butterfly8.png'},
    {'name': 'distractors/1cupcake1.png', 'path': 'distractors/1cupcake1.png'},
    {'name': 'distractors/1donut6.png', 'path': 'distractors/1donut6.png'},
    {'name': 'distractors/1giftbow4.png', 'path': 'distractors/1giftbow4.png'},
    {'name': 'distractors/1lipstick5.png', 'path': 'distractors/1lipstick5.png'},
    {'name': 'objects/3piano7.png', 'path': 'objects/3piano7.png'},
    {'name': 'distractors/1legoman12.png', 'path': 'distractors/1legoman12.png'},
    {'name': 'distractors/3gardenswing9.png', 'path': 'distractors/3gardenswing9.png'},
    {'name': 'distractors/1lock6.png', 'path': 'distractors/1lock6.png'},
    {'name': 'objects/2turtle8.png', 'path': 'objects/2turtle8.png'},
    {'name': 'distractors/1armyguy7.png', 'path': 'distractors/1armyguy7.png'},
    {'name': 'distractors/3tent6.png', 'path': 'distractors/3tent6.png'},
    {'name': 'objects/3motorcycle2.png', 'path': 'objects/3motorcycle2.png'},
    {'name': 'distractors/1lock3.png', 'path': 'distractors/1lock3.png'},
    {'name': 'distractors/1key8.png', 'path': 'distractors/1key8.png'},
    {'name': 'distractors/1giftbow10.png', 'path': 'distractors/1giftbow10.png'},
    {'name': 'distractors/3drumset4.png', 'path': 'distractors/3drumset4.png'},
    {'name': 'distractors/1watch5.png', 'path': 'distractors/1watch5.png'},
    {'name': 'distractors/1watch6.png', 'path': 'distractors/1watch6.png'},
    {'name': 'distractors/1butterfly3.png', 'path': 'distractors/1butterfly3.png'},
    {'name': 'distractors/1armyguy1.png', 'path': 'distractors/1armyguy1.png'},
    {'name': 'distractors/1cupcake10.png', 'path': 'distractors/1cupcake10.png'},
    {'name': 'distractors/1cookie9.png', 'path': 'distractors/1cookie9.png'},
    {'name': 'objects/2hat9.png', 'path': 'objects/2hat9.png'},
    {'name': 'distractors/1key4.png', 'path': 'distractors/1key4.png'},
    {'name': 'distractors/3elephant9.png', 'path': 'distractors/3elephant9.png'},
    {'name': 'distractors/3helicopter5.png', 'path': 'distractors/3helicopter5.png'},
    {'name': 'distractors/1legoman10.png', 'path': 'distractors/1legoman10.png'},
    {'name': 'distractors/3vantilatör10.png', 'path': 'distractors/3vantilatör10.png'},
    {'name': 'distractors/1lock7.png', 'path': 'distractors/1lock7.png'},
    {'name': 'distractors/3motorcycle1.png', 'path': 'distractors/3motorcycle1.png'},
    {'name': 'distractors/1cellphone7.png', 'path': 'distractors/1cellphone7.png'},
    {'name': 'distractors/1scrunchie7.png', 'path': 'distractors/1scrunchie7.png'},
    {'name': 'sounds/37.wav', 'path': 'sounds/37.wav'},
    {'name': 'distractors/3vacuumcleaner2.png', 'path': 'distractors/3vacuumcleaner2.png'},
    {'name': 'distractors/3couch1.png', 'path': 'distractors/3couch1.png'},
    {'name': 'distractors/2radio6.png', 'path': 'distractors/2radio6.png'},
    {'name': 'distractors/1glove12.png', 'path': 'distractors/1glove12.png'},
    {'name': 'sounds/44.wav', 'path': 'sounds/44.wav'},
    {'name': 'distractors/3bumpercar9.png', 'path': 'distractors/3bumpercar9.png'},
    {'name': 'distractors/2radio8.png', 'path': 'distractors/2radio8.png'},
    {'name': 'distractors/1butterfly12.png', 'path': 'distractors/1butterfly12.png'},
    {'name': 'objects/1leaves9.png', 'path': 'objects/1leaves9.png'},
    {'name': 'distractors/1lipstick2.png', 'path': 'distractors/1lipstick2.png'},
    {'name': 'distractors/1watch2.png', 'path': 'distractors/1watch2.png'},
    {'name': 'distractors/3gardenswing3.png', 'path': 'distractors/3gardenswing3.png'},
    {'name': 'distractors/1donut5.png', 'path': 'distractors/1donut5.png'},
    {'name': 'distractors/1giftbow12.png', 'path': 'distractors/1giftbow12.png'},
    {'name': 'objects/kus.png', 'path': 'objects/kus.png'},
    {'name': 'distractors/1computermouse1.png', 'path': 'distractors/1computermouse1.png'},
    {'name': 'distractors/2turtle8.png', 'path': 'distractors/2turtle8.png'},
    {'name': 'distractors/3vantilatör2.png', 'path': 'distractors/3vantilatör2.png'},
    {'name': 'objects/1easteregg_redo2.png', 'path': 'objects/1easteregg_redo2.png'},
    {'name': 'objects/2kettle11.png', 'path': 'objects/2kettle11.png'},
    {'name': 'distractors/3helicopter11.png', 'path': 'distractors/3helicopter11.png'},
    {'name': 'distractors/1pencilsharpener2.png', 'path': 'distractors/1pencilsharpener2.png'},
    {'name': 'distractors/1cellphone3.png', 'path': 'distractors/1cellphone3.png'},
    {'name': 'distractors/3bumpercar12.png', 'path': 'distractors/3bumpercar12.png'},
    {'name': 'objects/Anectarine.png', 'path': 'objects/Anectarine.png'},
    {'name': 'distractors/3vantilatör9.png', 'path': 'distractors/3vantilatör9.png'},
    {'name': 'distractors/1cupcake9.png', 'path': 'distractors/1cupcake9.png'},
    {'name': 'distractors/3gardenswing5.png', 'path': 'distractors/3gardenswing5.png'},
    {'name': 'distractors/1watch7.png', 'path': 'distractors/1watch7.png'},
    {'name': 'distractors/3motorcycle8.png', 'path': 'distractors/3motorcycle8.png'},
    {'name': 'distractors/3drumset9.png', 'path': 'distractors/3drumset9.png'},
    {'name': 'distractors/1computermouse10.png', 'path': 'distractors/1computermouse10.png'},
    {'name': 'distractors/3helicopter10.png', 'path': 'distractors/3helicopter10.png'},
    {'name': 'objects/2shirt3.png', 'path': 'objects/2shirt3.png'},
    {'name': 'distractors/Anectarine.png', 'path': 'distractors/Anectarine.png'},
    {'name': 'objects/2laundrybasket8.png', 'path': 'objects/2laundrybasket8.png'},
    {'name': 'distractors/3bed10.png', 'path': 'distractors/3bed10.png'},
    {'name': 'distractors/1giftbow9.png', 'path': 'distractors/1giftbow9.png'},
    {'name': 'distractors/1bowtie2.png', 'path': 'distractors/1bowtie2.png'},
    {'name': 'distractors/1key5.png', 'path': 'distractors/1key5.png'},
    {'name': 'objects/1legoman1.png', 'path': 'objects/1legoman1.png'},
    {'name': 'objects/3bed7.png', 'path': 'objects/3bed7.png'},
    {'name': 'sounds/22.wav', 'path': 'sounds/22.wav'},
    {'name': 'distractors/3garbagecan8.png', 'path': 'distractors/3garbagecan8.png'},
    {'name': 'objects/1butterfly6.png', 'path': 'objects/1butterfly6.png'},
    {'name': 'distractors/3helicopter2.png', 'path': 'distractors/3helicopter2.png'},
    {'name': 'distractors/2radio2.png', 'path': 'distractors/2radio2.png'},
    {'name': 'distractors/3couch3.png', 'path': 'distractors/3couch3.png'},
    {'name': 'distractors/1donut4.png', 'path': 'distractors/1donut4.png'},
    {'name': 'distractors/1armyguy4.png', 'path': 'distractors/1armyguy4.png'},
    {'name': 'distractors/1butterfly2.png', 'path': 'distractors/1butterfly2.png'},
    {'name': 'distractors/1legoman4.png', 'path': 'distractors/1legoman4.png'},
    {'name': 'distractors/1lipstick7.png', 'path': 'distractors/1lipstick7.png'},
    {'name': 'distractors/1pencilsharpener3.png', 'path': 'distractors/1pencilsharpener3.png'},
    {'name': 'distractors/3gardenswing2.png', 'path': 'distractors/3gardenswing2.png'},
    {'name': 'sounds/10.wav', 'path': 'sounds/10.wav'},
    {'name': 'distractors/1legoman9.png', 'path': 'distractors/1legoman9.png'},
    {'name': 'sounds/29.wav', 'path': 'sounds/29.wav'},
    {'name': 'distractors/3gardenswing12.png', 'path': 'distractors/3gardenswing12.png'},
    {'name': 'distractors/1legoman3.png', 'path': 'distractors/1legoman3.png'},
    {'name': 'distractors/1butterfly6.png', 'path': 'distractors/1butterfly6.png'},
    {'name': 'distractors/3vantilatör6.png', 'path': 'distractors/3vantilatör6.png'},
    {'name': 'distractors/1cupcake7.png', 'path': 'distractors/1cupcake7.png'},
    {'name': 'sounds/8.wav', 'path': 'sounds/8.wav'},
    {'name': 'distractors/1donut1.png', 'path': 'distractors/1donut1.png'},
    {'name': 'distractors/3couch4.png', 'path': 'distractors/3couch4.png'},
    {'name': 'distractors/3vacuumcleaner9.png', 'path': 'distractors/3vacuumcleaner9.png'},
    {'name': 'objects/2cat6.png', 'path': 'objects/2cat6.png'},
    {'name': 'distractors/3bed4.png', 'path': 'distractors/3bed4.png'},
    {'name': 'objects/Alemon11.png', 'path': 'objects/Alemon11.png'},
    {'name': 'distractors/3gardenswing7.png', 'path': 'distractors/3gardenswing7.png'},
    {'name': 'distractors/1cupcake2.png', 'path': 'distractors/1cupcake2.png'},
    {'name': 'distractors/1scrunchie8.png', 'path': 'distractors/1scrunchie8.png'},
    {'name': 'sounds/20.wav', 'path': 'sounds/20.wav'},
    {'name': 'distractors/3motorcycle12.png', 'path': 'distractors/3motorcycle12.png'},
    {'name': 'distractors/3drumset8.png', 'path': 'distractors/3drumset8.png'},
    {'name': 'objects/3wheelchair7.png', 'path': 'objects/3wheelchair7.png'},
    {'name': 'objects/2robot8.png', 'path': 'objects/2robot8.png'},
    {'name': 'objects/2cookpot2.png', 'path': 'objects/2cookpot2.png'},
    {'name': 'sounds/17.wav', 'path': 'sounds/17.wav'},
    {'name': 'distractors/3drumset12.png', 'path': 'distractors/3drumset12.png'},
    {'name': 'sounds/49.wav', 'path': 'sounds/49.wav'},
    {'name': 'distractors/1bowtie5.png', 'path': 'distractors/1bowtie5.png'},
    {'name': 'sounds/26.wav', 'path': 'sounds/26.wav'},
    {'name': 'distractors/3elephant12.png', 'path': 'distractors/3elephant12.png'},
    {'name': 'sounds/46.wav', 'path': 'sounds/46.wav'},
    {'name': 'distractors/1watch10.png', 'path': 'distractors/1watch10.png'},
    {'name': 'distractors/1armyguy5.png', 'path': 'distractors/1armyguy5.png'},
    {'name': 'objects/2tire2.png', 'path': 'objects/2tire2.png'},
    {'name': 'distractors/1bowtie4.png', 'path': 'distractors/1bowtie4.png'},
    {'name': 'distractors/3tent12.png', 'path': 'distractors/3tent12.png'},
    {'name': 'distractors/1donut11.png', 'path': 'distractors/1donut11.png'},
    {'name': 'distractors/1lipstick9.png', 'path': 'distractors/1lipstick9.png'},
    {'name': 'sounds/11.wav', 'path': 'sounds/11.wav'},
    {'name': 'distractors/1cookie7.png', 'path': 'distractors/1cookie7.png'},
    {'name': 'objects/1cookie2.png', 'path': 'objects/1cookie2.png'},
    {'name': 'objects/3DJ.png', 'path': 'objects/3DJ.png'},
    {'name': 'objects/2stool1.png', 'path': 'objects/2stool1.png'},
    {'name': 'distractors/1bowtie12.png', 'path': 'distractors/1bowtie12.png'},
    {'name': 'sounds/18.wav', 'path': 'sounds/18.wav'},
    {'name': 'distractors/3elephant10.png', 'path': 'distractors/3elephant10.png'},
    {'name': 'distractors/1pencilsharpener12.png', 'path': 'distractors/1pencilsharpener12.png'},
    {'name': 'distractors/1glove11.png', 'path': 'distractors/1glove11.png'},
    {'name': 'distractors/1scrunchie1.png', 'path': 'distractors/1scrunchie1.png'},
    {'name': 'distractors/1bowtie10.png', 'path': 'distractors/1bowtie10.png'},
    {'name': 'distractors/1giftbow2.png', 'path': 'distractors/1giftbow2.png'},
    {'name': 'distractors/1bowtie9.png', 'path': 'distractors/1bowtie9.png'},
    {'name': 'sounds/42.wav', 'path': 'sounds/42.wav'},
    {'name': 'distractors/3tricycle5.png', 'path': 'distractors/3tricycle5.png'},
    {'name': 'objects/3forklift11.png', 'path': 'objects/3forklift11.png'},
    {'name': 'sounds/31.wav', 'path': 'sounds/31.wav'},
    {'name': 'objects/3bumpercar9.png', 'path': 'objects/3bumpercar9.png'},
    {'name': 'sounds/48.wav', 'path': 'sounds/48.wav'},
    {'name': 'distractors/3tricycle2.png', 'path': 'distractors/3tricycle2.png'},
    {'name': 'distractors/3couch11.png', 'path': 'distractors/3couch11.png'},
    {'name': 'objects/1mp3player7.png', 'path': 'objects/1mp3player7.png'},
    {'name': 'distractors/1seashell11.png', 'path': 'distractors/1seashell11.png'},
    {'name': 'distractors/3motorcycle10.png', 'path': 'distractors/3motorcycle10.png'},
    {'name': 'objects/1compass4.png', 'path': 'objects/1compass4.png'},
    {'name': 'objects/nar.png', 'path': 'objects/nar.png'},
    {'name': 'distractors/3vacuumcleaner3.png', 'path': 'distractors/3vacuumcleaner3.png'},
    {'name': 'distractors/3bed6.png', 'path': 'distractors/3bed6.png'},
    {'name': 'distractors/3vacuumcleaner1.png', 'path': 'distractors/3vacuumcleaner1.png'},
    {'name': 'distractors/3elephant8.png', 'path': 'distractors/3elephant8.png'},
    {'name': 'distractors/1computermouse12.png', 'path': 'distractors/1computermouse12.png'},
    {'name': 'distractors/1cellphone11.png', 'path': 'distractors/1cellphone11.png'},
    {'name': 'sounds/36.wav', 'path': 'sounds/36.wav'},
    {'name': 'distractors/1scrunchie9.png', 'path': 'distractors/1scrunchie9.png'},
    {'name': 'distractors/1computermouse5.png', 'path': 'distractors/1computermouse5.png'},
    {'name': 'distractors/3tricycle10.png', 'path': 'distractors/3tricycle10.png'},
    {'name': 'objects/3picnictable12.png', 'path': 'objects/3picnictable12.png'},
    {'name': 'objects/1pencilsharpener2.png', 'path': 'objects/1pencilsharpener2.png'},
    {'name': 'distractors/3langırt9.png', 'path': 'distractors/3langırt9.png'},
    {'name': 'objects/1rubberduck2.png', 'path': 'objects/1rubberduck2.png'},
    {'name': 'distractors/3drumset11.png', 'path': 'distractors/3drumset11.png'},
    {'name': 'distractors/1computermouse8.png', 'path': 'distractors/1computermouse8.png'},
    {'name': 'distractors/1giftbow5.png', 'path': 'distractors/1giftbow5.png'},
    {'name': 'distractors/1key6.png', 'path': 'distractors/1key6.png'},
    {'name': 'distractors/1donut2.png', 'path': 'distractors/1donut2.png'},
    {'name': 'distractors/1butterfly9.png', 'path': 'distractors/1butterfly9.png'},
    {'name': 'distractors/1scrunchie5.png', 'path': 'distractors/1scrunchie5.png'},
    {'name': 'distractors/3tent5.png', 'path': 'distractors/3tent5.png'},
    {'name': 'distractors/1nailpolish10.png', 'path': 'distractors/1nailpolish10.png'},
    {'name': 'distractors/1nailpolish3.png', 'path': 'distractors/1nailpolish3.png'},
    {'name': 'distractors/1computermouse2.png', 'path': 'distractors/1computermouse2.png'},
    {'name': 'distractors/3tent9.png', 'path': 'distractors/3tent9.png'},
    {'name': 'objects/1cellphone6.png', 'path': 'objects/1cellphone6.png'},
    {'name': 'distractors/1watch4.png', 'path': 'distractors/1watch4.png'},
    {'name': 'distractors/1lipstick8.png', 'path': 'distractors/1lipstick8.png'},
    {'name': 'objects/2radio8.png', 'path': 'objects/2radio8.png'},
    {'name': 'objects/3horse7.png', 'path': 'objects/3horse7.png'},
    {'name': 'sounds/25.wav', 'path': 'sounds/25.wav'},
    {'name': 'distractors/1cellphone2.png', 'path': 'distractors/1cellphone2.png'},
    {'name': 'distractors/1scrunchie3.png', 'path': 'distractors/1scrunchie3.png'},
    {'name': 'distractors/3gardenswing10.png', 'path': 'distractors/3gardenswing10.png'},
    {'name': 'objects/sock4.png', 'path': 'objects/sock4.png'},
    {'name': 'distractors/3garbagecan6.png', 'path': 'distractors/3garbagecan6.png'},
    {'name': 'distractors/3drumset5.png', 'path': 'distractors/3drumset5.png'},
    {'name': 'sounds/33.wav', 'path': 'sounds/33.wav'},
    {'name': 'distractors/.DS_Store', 'path': 'distractors/.DS_Store'},
    {'name': 'sounds/5.wav', 'path': 'sounds/5.wav'},
    {'name': 'distractors/1lipstick12.png', 'path': 'distractors/1lipstick12.png'},
    {'name': 'distractors/1armyguy12.png', 'path': 'distractors/1armyguy12.png'},
    {'name': 'distractors/2radio5.png', 'path': 'distractors/2radio5.png'},
    {'name': 'objects/1watch2.png', 'path': 'objects/1watch2.png'},
    {'name': 'distractors/3garbagecan7.png', 'path': 'distractors/3garbagecan7.png'},
    {'name': 'distractors/3tent10.png', 'path': 'distractors/3tent10.png'},
    {'name': 'objects/1computermouse3.png', 'path': 'objects/1computermouse3.png'},
    {'name': 'distractors/3tricycle12.png', 'path': 'distractors/3tricycle12.png'},
    {'name': 'distractors/1lock10.png', 'path': 'distractors/1lock10.png'},
    {'name': 'distractors/1lock8.png', 'path': 'distractors/1lock8.png'},
    {'name': 'distractors/2turtle1.png', 'path': 'distractors/2turtle1.png'},
    {'name': 'distractors/1glove9.png', 'path': 'distractors/1glove9.png'},
    {'name': 'sounds/47.wav', 'path': 'sounds/47.wav'},
    {'name': 'distractors/1seashell5.png', 'path': 'distractors/1seashell5.png'},
    {'name': 'sounds/23.wav', 'path': 'sounds/23.wav'},
    {'name': 'distractors/1seashell3.png', 'path': 'distractors/1seashell3.png'},
    {'name': 'distractors/1cellphone5.png', 'path': 'distractors/1cellphone5.png'},
    {'name': 'distractors/1seashell10.png', 'path': 'distractors/1seashell10.png'},
    {'name': 'distractors/3vacuumcleaner6.png', 'path': 'distractors/3vacuumcleaner6.png'},
    {'name': 'distractors/1computermouse4.png', 'path': 'distractors/1computermouse4.png'},
    {'name': 'distractors/3tent8.png', 'path': 'distractors/3tent8.png'},
    {'name': 'sounds/38.wav', 'path': 'sounds/38.wav'},
    {'name': 'distractors/3bed9.png', 'path': 'distractors/3bed9.png'},
    {'name': 'distractors/3vantilatör7.png', 'path': 'distractors/3vantilatör7.png'},
    {'name': 'distractors/3tricycle4.png', 'path': 'distractors/3tricycle4.png'},
    {'name': 'sounds/3.wav', 'path': 'sounds/3.wav'},
    {'name': 'distractors/3gardenswing11.png', 'path': 'distractors/3gardenswing11.png'},
    {'name': 'distractors/1cellphone10.png', 'path': 'distractors/1cellphone10.png'},
    {'name': 'objects/AANTICUP4.png', 'path': 'objects/AANTICUP4.png'},
    {'name': 'distractors/1butterfly11.png', 'path': 'distractors/1butterfly11.png'},
    {'name': 'distractors/3tricycle9.png', 'path': 'distractors/3tricycle9.png'},
    {'name': 'distractors/1cookie5.png', 'path': 'distractors/1cookie5.png'},
    {'name': 'distractors/1seashell4.png', 'path': 'distractors/1seashell4.png'},
    {'name': 'distractors/3motorcycle7.png', 'path': 'distractors/3motorcycle7.png'},
    {'name': 'distractors/Atennisball2.png', 'path': 'distractors/Atennisball2.png'},
    {'name': 'distractors/1armyguy6.png', 'path': 'distractors/1armyguy6.png'},
    {'name': 'distractors/3helicopter4.png', 'path': 'distractors/3helicopter4.png'},
    {'name': 'distractors/1lock11.png', 'path': 'distractors/1lock11.png'},
    {'name': 'objects/1pacifier11.png', 'path': 'objects/1pacifier11.png'},
    {'name': 'distractors/1nailpolish9.png', 'path': 'distractors/1nailpolish9.png'},
    {'name': 'distractors/1giftbow7.png', 'path': 'distractors/1giftbow7.png'},
    {'name': 'distractors/AANTICUP4.png', 'path': 'distractors/AANTICUP4.png'},
    {'name': 'circle.png', 'path': 'circle.png'},
    {'name': 'distractors/1lock4.png', 'path': 'distractors/1lock4.png'},
    {'name': 'distractors/3elephant11.png', 'path': 'distractors/3elephant11.png'},
    {'name': 'distractors/Alemon11.png', 'path': 'distractors/Alemon11.png'},
    {'name': 'distractors/1pencilsharpener4.png', 'path': 'distractors/1pencilsharpener4.png'},
    {'name': 'distractors/1bowtie8.png', 'path': 'distractors/1bowtie8.png'},
    {'name': 'distractors/1cookie6.png', 'path': 'distractors/1cookie6.png'},
    {'name': 'objects/1scrunchie1.png', 'path': 'objects/1scrunchie1.png'},
    {'name': 'distractors/3bumpercar3.png', 'path': 'distractors/3bumpercar3.png'},
    {'name': 'sounds/14.wav', 'path': 'sounds/14.wav'},
    {'name': 'distractors/1donut7.png', 'path': 'distractors/1donut7.png'},
    {'name': 'distractors/1donut9.png', 'path': 'distractors/1donut9.png'},
    {'name': 'sounds/45.wav', 'path': 'sounds/45.wav'},
    {'name': 'distractors/3bed8.png', 'path': 'distractors/3bed8.png'},
    {'name': 'sounds/12.wav', 'path': 'sounds/12.wav'},
    {'name': 'distractors/3tricycle1.png', 'path': 'distractors/3tricycle1.png'},
    {'name': 'distractors/1cookie1.png', 'path': 'distractors/1cookie1.png'},
    {'name': 'distractors/1watch3.png', 'path': 'distractors/1watch3.png'},
    {'name': 'sounds/32.wav', 'path': 'sounds/32.wav'},
    {'name': 'sounds/1.wav', 'path': 'sounds/1.wav'},
    {'name': 'distractors/1lock1.png', 'path': 'distractors/1lock1.png'},
    {'name': 'sounds/9.wav', 'path': 'sounds/9.wav'},
    {'name': 'distractors/1scrunchie11.png', 'path': 'distractors/1scrunchie11.png'},
    {'name': 'distractors/3vacuumcleaner11.png', 'path': 'distractors/3vacuumcleaner11.png'},
    {'name': 'distractors/2radio12.png', 'path': 'distractors/2radio12.png'},
    {'name': 'objects/3gardenswing9.png', 'path': 'objects/3gardenswing9.png'},
    {'name': 'distractors/3motorcycle9.png', 'path': 'distractors/3motorcycle9.png'},
    {'name': 'sounds/7.wav', 'path': 'sounds/7.wav'},
    {'name': 'distractors/1lock2.png', 'path': 'distractors/1lock2.png'},
    {'name': 'distractors/3couch6.png', 'path': 'distractors/3couch6.png'},
    {'name': 'objects/1icecreamcones10.png', 'path': 'objects/1icecreamcones10.png'},
    {'name': 'distractors/3drumset2.png', 'path': 'distractors/3drumset2.png'},
    {'name': 'distractors/1cookie4.png', 'path': 'distractors/1cookie4.png'},
    {'name': 'distractors/1lipstick3.png', 'path': 'distractors/1lipstick3.png'},
    {'name': 'distractors/1lock12.png', 'path': 'distractors/1lock12.png'},
    {'name': 'distractors/1cellphone9.png', 'path': 'distractors/1cellphone9.png'},
    {'name': 'distractors/3langırt8.png', 'path': 'distractors/3langırt8.png'},
    {'name': 'distractors/1donut10.png', 'path': 'distractors/1donut10.png'},
    {'name': 'distractors/1computermouse11.png', 'path': 'distractors/1computermouse11.png'},
    {'name': 'sounds/41.wav', 'path': 'sounds/41.wav'},
    {'name': 'distractors/3tent3.png', 'path': 'distractors/3tent3.png'},
    {'name': 'distractors/3gardenswing8.png', 'path': 'distractors/3gardenswing8.png'},
    {'name': 'distractors/3garbagecan9.png', 'path': 'distractors/3garbagecan9.png'},
    {'name': 'distractors/2turtle15.png', 'path': 'distractors/2turtle15.png'},
    {'name': 'distractors/3vacuumcleaner8.png', 'path': 'distractors/3vacuumcleaner8.png'},
    {'name': 'distractors/1key2.png', 'path': 'distractors/1key2.png'},
    {'name': 'distractors/1glove5.png', 'path': 'distractors/1glove5.png'},
    {'name': 'distractors/3langırt5.png', 'path': 'distractors/3langırt5.png'},
    {'name': 'distractors/1glove10.png', 'path': 'distractors/1glove10.png'},
    {'name': 'distractors/3bed5.png', 'path': 'distractors/3bed5.png'},
    {'name': 'distractors/1watch9.png', 'path': 'distractors/1watch9.png'},
    {'name': 'objects/1cupcake5.png', 'path': 'objects/1cupcake5.png'},
    {'name': 'distractors/1glove7.png', 'path': 'distractors/1glove7.png'},
    {'name': 'sounds/30.wav', 'path': 'sounds/30.wav'},
    {'name': 'distractors/3bed7.png', 'path': 'distractors/3bed7.png'},
    {'name': 'objects/3garbagecan8.png', 'path': 'objects/3garbagecan8.png'},
    {'name': 'distractors/2turtle13.png', 'path': 'distractors/2turtle13.png'},
    {'name': 'distractors/3vacuumcleaner5.png', 'path': 'distractors/3vacuumcleaner5.png'},
    {'name': 'distractors/1cookie8.png', 'path': 'distractors/1cookie8.png'},
    {'name': 'distractors/3couch8.png', 'path': 'distractors/3couch8.png'},
    {'name': 'distractors/1lipstick11.png', 'path': 'distractors/1lipstick11.png'},
    {'name': 'distractors/3chair9.png', 'path': 'distractors/3chair9.png'},
    {'name': 'sounds/13.wav', 'path': 'sounds/13.wav'},
    {'name': 'sounds/16.wav', 'path': 'sounds/16.wav'},
    {'name': 'distractors/1glove4.png', 'path': 'distractors/1glove4.png'},
    {'name': 'distractors/3tricycle11.png', 'path': 'distractors/3tricycle11.png'},
    {'name': 'objects/1battery4.png', 'path': 'objects/1battery4.png'},
    {'name': 'distractors/1watch11.png', 'path': 'distractors/1watch11.png'},
    {'name': 'distractors/3langırt11.png', 'path': 'distractors/3langırt11.png'},
    {'name': 'objects/2turtle1.png', 'path': 'objects/2turtle1.png'},
    {'name': 'objects/2printer1.png', 'path': 'objects/2printer1.png'},
    {'name': 'distractors/1legoman5.png', 'path': 'distractors/1legoman5.png'},
    {'name': 'distractors/3tent1.png', 'path': 'distractors/3tent1.png'},
    {'name': 'distractors/3bumpercar8.png', 'path': 'distractors/3bumpercar8.png'},
    {'name': 'distractors/3tricycle8.png', 'path': 'distractors/3tricycle8.png'},
    {'name': 'distractors/3helicopter8.png', 'path': 'distractors/3helicopter8.png'},
    {'name': 'objects/1nailpolish2.png', 'path': 'objects/1nailpolish2.png'},
    {'name': 'distractors/1nailpolish8.png', 'path': 'distractors/1nailpolish8.png'},
    {'name': 'distractors/1giftbow1.png', 'path': 'distractors/1giftbow1.png'},
    {'name': 'distractors/2radio10.png', 'path': 'distractors/2radio10.png'},
    {'name': 'distractors/3couch12.png', 'path': 'distractors/3couch12.png'},
    {'name': 'distractors/3chair11.png', 'path': 'distractors/3chair11.png'},
    {'name': 'distractors/3bumpercar7.png', 'path': 'distractors/3bumpercar7.png'},
    {'name': 'distractors/3motorcycle6.png', 'path': 'distractors/3motorcycle6.png'},
    {'name': 'distractors/3tent2.png', 'path': 'distractors/3tent2.png'},
    {'name': 'distractors/1nailpolish1.png', 'path': 'distractors/1nailpolish1.png'},
    {'name': 'objects/2handbag5.png', 'path': 'objects/2handbag5.png'},
    {'name': 'distractors/2radio11.png', 'path': 'distractors/2radio11.png'},
    {'name': 'distractors/3bed12.png', 'path': 'distractors/3bed12.png'},
    {'name': 'objects/2binocular4.png', 'path': 'objects/2binocular4.png'},
    {'name': 'distractors/3vantilatör5.png', 'path': 'distractors/3vantilatör5.png'},
    {'name': 'distractors/1legoman11.png', 'path': 'distractors/1legoman11.png'},
    {'name': 'distractors/1cookie3.png', 'path': 'distractors/1cookie3.png'},
    {'name': 'distractors/1giftbow8.png', 'path': 'distractors/1giftbow8.png'},
    {'name': 'distractors/126376346.thl.png', 'path': 'distractors/126376346.thl.png'},
    {'name': 'distractors/1scrunchie6.png', 'path': 'distractors/1scrunchie6.png'},
    {'name': 'objects/1mushroom3.png', 'path': 'objects/1mushroom3.png'},
    {'name': 'objects/3ironing7.png', 'path': 'objects/3ironing7.png'},
    {'name': 'distractors/1cellphone6.png', 'path': 'distractors/1cellphone6.png'},
    {'name': 'distractors/1pencilsharpener7.png', 'path': 'distractors/1pencilsharpener7.png'},
    {'name': 'distractors/1bowtie1.png', 'path': 'distractors/1bowtie1.png'},
    {'name': 'distractors/1cellphone8.png', 'path': 'distractors/1cellphone8.png'},
    {'name': 'distractors/2turtle5.png', 'path': 'distractors/2turtle5.png'},
    {'name': 'distractors/1pencilsharpener10.png', 'path': 'distractors/1pencilsharpener10.png'},
    {'name': 'distractors/3bumpercar5.png', 'path': 'distractors/3bumpercar5.png'},
    {'name': 'objects/1bowtie6.png', 'path': 'objects/1bowtie6.png'},
    {'name': 'distractors/3motorcycle2.png', 'path': 'distractors/3motorcycle2.png'},
    {'name': 'distractors/1lipstick6.png', 'path': 'distractors/1lipstick6.png'},
    {'name': 'distractors/1legoman7.png', 'path': 'distractors/1legoman7.png'},
    {'name': 'distractors/3helicopter12.png', 'path': 'distractors/3helicopter12.png'},
    {'name': 'distractors/1seashell9.png', 'path': 'distractors/1seashell9.png'},
    {'name': 'distractors/3tent11.png', 'path': 'distractors/3tent11.png'},
    {'name': 'distractors/1giftbow11.png', 'path': 'distractors/1giftbow11.png'},
    {'name': 'distractors/3langırt6.png', 'path': 'distractors/3langırt6.png'},
    {'name': 'distractors/3gardenswing4.png', 'path': 'distractors/3gardenswing4.png'},
    {'name': 'objects/1flask2.png', 'path': 'objects/1flask2.png'},
    {'name': 'distractors/3helicopter1.png', 'path': 'distractors/3helicopter1.png'},
    {'name': 'distractors/3vantilatör8.png', 'path': 'distractors/3vantilatör8.png'},
    {'name': 'objects/1armyguy1.png', 'path': 'objects/1armyguy1.png'},
    {'name': 'distractors/1cellphone4.png', 'path': 'distractors/1cellphone4.png'},
    {'name': 'distractors/3drumset1.png', 'path': 'distractors/3drumset1.png'},
    {'name': 'distractors/1donut12.png', 'path': 'distractors/1donut12.png'},
    {'name': 'objects/B_pear.png', 'path': 'objects/B_pear.png'},
    {'name': 'distractors/3vantilatör3.png', 'path': 'distractors/3vantilatör3.png'},
    {'name': 'distractors/1key11.png', 'path': 'distractors/1key11.png'},
    {'name': 'objects/3tricycle10.png', 'path': 'objects/3tricycle10.png'},
    {'name': 'distractors/1glove8.png', 'path': 'distractors/1glove8.png'},
    {'name': 'distractors/1armyguy9.png', 'path': 'distractors/1armyguy9.png'},
    {'name': 'sounds/40.wav', 'path': 'sounds/40.wav'},
    {'name': 'sounds/6.wav', 'path': 'sounds/6.wav'},
    {'name': 'distractors/1nailpolish2.png', 'path': 'distractors/1nailpolish2.png'},
    {'name': 'distractors/126375702.thl.png', 'path': 'distractors/126375702.thl.png'},
    {'name': 'distractors/1key12.png', 'path': 'distractors/1key12.png'},
    {'name': 'distractors/3helicopter9.png', 'path': 'distractors/3helicopter9.png'},
    {'name': 'distractors/1cellphone12.png', 'path': 'distractors/1cellphone12.png'},
    {'name': 'distractors/1lipstick1.png', 'path': 'distractors/1lipstick1.png'},
    {'name': 'distractors/3tricycle6.png', 'path': 'distractors/3tricycle6.png'},
    {'name': 'distractors/1cupcake4.png', 'path': 'distractors/1cupcake4.png'},
    {'name': 'distractors/2turtle11.png', 'path': 'distractors/2turtle11.png'},
    {'name': 'distractors/3couch7.png', 'path': 'distractors/3couch7.png'},
    {'name': 'distractors/1armyguy10.png', 'path': 'distractors/1armyguy10.png'},
    {'name': 'distractors/1glove2.png', 'path': 'distractors/1glove2.png'},
    {'name': 'objects/1chesshorse3.png', 'path': 'objects/1chesshorse3.png'},
    {'name': 'distractors/1key9.png', 'path': 'distractors/1key9.png'},
    {'name': 'objects/1glove6.png', 'path': 'objects/1glove6.png'},
    {'name': 'distractors/B_pear.png', 'path': 'distractors/B_pear.png'},
    {'name': 'distractors/1armyguy11.png', 'path': 'distractors/1armyguy11.png'},
    {'name': 'distractors/3vantilatör11.png', 'path': 'distractors/3vantilatör11.png'},
    {'name': 'distractors/1nailpolish6.png', 'path': 'distractors/1nailpolish6.png'},
    {'name': 'objects/2bearteddy4.png', 'path': 'objects/2bearteddy4.png'},
    {'name': 'distractors/1pencilsharpener5.png', 'path': 'distractors/1pencilsharpener5.png'},
    {'name': 'distractors/1legoman6.png', 'path': 'distractors/1legoman6.png'},
    {'name': 'distractors/3vacuumcleaner12.png', 'path': 'distractors/3vacuumcleaner12.png'},
    {'name': 'distractors/2radio3.png', 'path': 'distractors/2radio3.png'},
    {'name': 'distractors/1cellphone1.png', 'path': 'distractors/1cellphone1.png'},
    {'name': 'distractors/1scrunchie4.png', 'path': 'distractors/1scrunchie4.png'},
    {'name': 'distractors/1seashell8.png', 'path': 'distractors/1seashell8.png'},
    {'name': 'distractors/1donut8.png', 'path': 'distractors/1donut8.png'},
    {'name': 'sounds/27.wav', 'path': 'sounds/27.wav'},
    {'name': 'distractors/1armyguy3.png', 'path': 'distractors/1armyguy3.png'},
    {'name': 'objects/1christmastreeornamantball7.png', 'path': 'objects/1christmastreeornamantball7.png'},
    {'name': 'distractors/1computermouse6.png', 'path': 'distractors/1computermouse6.png'},
    {'name': 'distractors/1cupcake11.png', 'path': 'distractors/1cupcake11.png'},
    {'name': 'sounds/15.wav', 'path': 'sounds/15.wav'},
    {'name': 'distractors/3couch5.png', 'path': 'distractors/3couch5.png'},
    {'name': 'distractors/1bowtie7.png', 'path': 'distractors/1bowtie7.png'},
    {'name': 'distractors/3tent4.png', 'path': 'distractors/3tent4.png'},
    {'name': 'sounds/4.wav', 'path': 'sounds/4.wav'},
    {'name': 'objects/1seashell8.png', 'path': 'objects/1seashell8.png'},
    {'name': 'distractors/1butterfly5.png', 'path': 'distractors/1butterfly5.png'},
    {'name': 'distractors/1scrunchie10.png', 'path': 'distractors/1scrunchie10.png'},
    {'name': 'distractors/1armyguy2.png', 'path': 'distractors/1armyguy2.png'},
    {'name': 'distractors/1legoman8.png', 'path': 'distractors/1legoman8.png'},
    {'name': 'distractors/1cupcake8.png', 'path': 'distractors/1cupcake8.png'},
    {'name': 'distractors/1butterfly1.png', 'path': 'distractors/1butterfly1.png'},
    {'name': 'objects/3couch7.png', 'path': 'objects/3couch7.png'},
    {'name': 'distractors/3helicopter3.png', 'path': 'distractors/3helicopter3.png'},
    {'name': 'objects/1cassettetape7.png', 'path': 'objects/1cassettetape7.png'},
    {'name': 'sounds/21.wav', 'path': 'sounds/21.wav'},
    {'name': 'distractors/1watch8.png', 'path': 'distractors/1watch8.png'},
    {'name': 'distractors/3tricycle7.png', 'path': 'distractors/3tricycle7.png'},
    {'name': 'distractors/1giftbow6.png', 'path': 'distractors/1giftbow6.png'},
    {'name': 'distractors/1bowtie6.png', 'path': 'distractors/1bowtie6.png'}
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
var image_10;
var Stim_image;
var blank500msClock;
var fixation;
var practice_blockClock;
var image_3;
var text_3;
var image_2;
var polygon;
var mouse_4;
var blank500ms_2Clock;
var text_2;
var text_PromptClock;
var filler1;
var targetText;
var trialClock;
var instr;
var text;
var key_resp_4;
var sound1Clock;
var ret_cue;
var sound_3;
var key_resp_2;
var sound2Clock;
var image_11;
var sound_2;
var dual_resp2;
var polygon_2;
var mouse_5;
var ret_testClock;
var polygon_3;
var mouse_6;
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
var image_12;
var polygon_6;
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
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : 'circle.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 0.5,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  Stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "blank500ms"
  blank500msClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "practice_block"
  practice_blockClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'circle.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  polygon = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon', 
    edges: 999, size:[1, 1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -3, interpolate: true,
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
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
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sound1"
  sound1Clock = new util.Clock();
  ret_cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ret_cue', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_3.setVolume(1);
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "sound2"
  sound2Clock = new util.Clock();
  image_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_11', units : undefined, 
    image : 'circle.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 0.5,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  sound_2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1.5,
    });
  sound_2.setVolume(1);
  dual_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_2', 
    edges: 999, size:[1, 1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -3, interpolate: true,
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "ret_test"
  ret_testClock = new util.Clock();
  polygon_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_3', 
    edges: 999, size:[1, 1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: 0, interpolate: true,
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
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
    ori : 0, pos : [0, 0], size : [0.15, 0.15],
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
    pos: [0, 0], height: 0.01,  wrapWidth: undefined, ori: 0,
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
  image_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_12', units : undefined, 
    image : 'circle.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 0.5,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  polygon_6 = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon_6', 
    edges: 999, size:[1, 1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
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
    nReps: 1, method: TrialHandler.Method.RANDOM,
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
    sound_loopLoopScheduler.add(ret_testRoutineBegin(snapshot));
    sound_loopLoopScheduler.add(ret_testRoutineEachFrame(snapshot));
    sound_loopLoopScheduler.add(ret_testRoutineEnd(snapshot));
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
    routineTimer.add(0.100000);
    // update component parameters for each repeat
    Stim_image.setPos([object_location_x, object_location_y]);
    Stim_image.setImage(objects);
    // keep track of which components have finished
    show_imagesComponents = [];
    show_imagesComponents.push(image_10);
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
    
    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_10.setAutoDraw(false);
    }
    
    // *Stim_image* updates
    if (t >= 0.0 && Stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim_image.tStart = t;  // (not accounting for frame time here)
      Stim_image.frameNStart = frameN;  // exact frame index
      
      Stim_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    practice_blockComponents.push(image_3);
    practice_blockComponents.push(text_3);
    practice_blockComponents.push(image_2);
    practice_blockComponents.push(polygon);
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
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 1.5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *polygon* updates
    if (t >= 0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
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
var _key_resp_4_allKeys;
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
    event.clearEvents("keyboard");
    
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(instr);
    trialComponents.push(text);
    trialComponents.push(key_resp_4);
    
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
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['enter'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
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
    thisExp.addData("typedWord", text.text);
    
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
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
    // update component parameters for each repeat
    ret_cue.setImage(objects);
    sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: sounds1,
    secs: -1,
    });
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
    if (t >= (sound_3.getDuration() + sound_3.tStart)     && sound_3.status === PsychoJS.Status.STARTED) {
      sound_3.stop();  // stop the sound (if longer than duration)
      sound_3.status = PsychoJS.Status.FINISHED;
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
    if (continueRoutine) {
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
    // the Routine "sound1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    // setup some python lists for storing info about the mouse_5
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    sound2Components = [];
    sound2Components.push(image_11);
    sound2Components.push(sound_2);
    sound2Components.push(dual_resp2);
    sound2Components.push(polygon_2);
    sound2Components.push(mouse_5);
    
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
    
    // *image_11* updates
    if (t >= 0.0 && image_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_11.tStart = t;  // (not accounting for frame time here)
      image_11.frameNStart = frameN;  // exact frame index
      
      image_11.setAutoDraw(true);
    }

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
    
    
    // *polygon_2* updates
    if (t >= 3 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 3 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
    }
    // *mouse_5* updates
    if (t >= 3 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 3 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_5.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
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
    for (const thisComponent of sound2Components)
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
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_5.getPos();
    _mouseButtons = mouse_5.getPressed();
    psychoJS.experiment.addData('mouse_5.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_5.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_5.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_5.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_5.rightButton', _mouseButtons[2]);
    // the Routine "sound2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
    routineTimer.add(1.250000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ret_testComponents = [];
    ret_testComponents.push(polygon_3);
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
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_3.setAutoDraw(false);
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
    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_6.status = PsychoJS.Status.FINISHED;
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
    if (continueRoutine && routineTimer.getTime() > 0) {
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
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_7
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ret_dist_testComponents = [];
    ret_dist_testComponents.push(image_12);
    ret_dist_testComponents.push(polygon_6);
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
    
    // *image_12* updates
    if (t >= 0.0 && image_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_12.tStart = t;  // (not accounting for frame time here)
      image_12.frameNStart = frameN;  // exact frame index
      
      image_12.setAutoDraw(true);
    }

    
    // *polygon_6* updates
    if (t >= 0.0 && polygon_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_6.tStart = t;  // (not accounting for frame time here)
      polygon_6.frameNStart = frameN;  // exact frame index
      
      polygon_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_6.setAutoDraw(false);
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
    if (continueRoutine) {
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
    // the Routine "ret_dist_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
