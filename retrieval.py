#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.4),
    on Thu Feb  4 02:15:20 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.4'
expName = 'retrieval'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/nursimaunver/Memory ryhthms/ltm-att-exp/retrieval.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "begin"
beginClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='welcome \n',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial_s1"
trial_s1Clock = core.Clock()
retrieval = visual.ImageStim(
    win=win,
    name='retrieval', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
sound_1 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
    name='sound_1')
sound_1.setVolume(1)
dual_resp1 = keyboard.Keyboard()

# Initialize components for Routine "trial_s2"
trial_s2Clock = core.Clock()
sound_2 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
    name='sound_2')
sound_2.setVolume(1)
dual_resp2 = keyboard.Keyboard()

# Initialize components for Routine "retrieval_test"
retrieval_testClock = core.Clock()
polygon = visual.Polygon(
    win=win, name='polygon',
    edges=999, size=(1, 1),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=0.3, depth=0.0, interpolate=True)
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "begin"-------
continueRoutine = True
routineTimer.add(1.000000)
# update component parameters for each repeat
# keep track of which components have finished
beginComponents = [text]
for thisComponent in beginComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
beginClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "begin"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = beginClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=beginClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in beginComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "begin"-------
for thisComponent in beginComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)

# set up handler to look after randomisation of conditions etc
exp_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('../../../../Users/nursimaunver/Memory ryhthms/ltm-att-exp/condFile.xlsx'),
    seed=None, name='exp_loop')
thisExp.addLoop(exp_loop)  # add the loop to the experiment
thisExp_loop = exp_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisExp_loop.rgb)
if thisExp_loop != None:
    for paramName in thisExp_loop:
        exec('{} = thisExp_loop[paramName]'.format(paramName))

for thisExp_loop in exp_loop:
    currentLoop = exp_loop
    # abbreviate parameter names if possible (e.g. rgb = thisExp_loop.rgb)
    if thisExp_loop != None:
        for paramName in thisExp_loop:
            exec('{} = thisExp_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial_s1"-------
    continueRoutine = True
    # update component parameters for each repeat
    retrieval.setImage(objects)
    sound_1.setSound(sounds1, secs=1.5, hamming=True)
    sound_1.setVolume(1, log=False)
    dual_resp1.keys = []
    dual_resp1.rt = []
    _dual_resp1_allKeys = []
    # keep track of which components have finished
    trial_s1Components = [retrieval, sound_1, dual_resp1]
    for thisComponent in trial_s1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_s1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial_s1"-------
    while continueRoutine:
        # get current time
        t = trial_s1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_s1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *retrieval* updates
        if retrieval.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            retrieval.frameNStart = frameN  # exact frame index
            retrieval.tStart = t  # local t and not account for scr refresh
            retrieval.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(retrieval, 'tStartRefresh')  # time at next scr refresh
            retrieval.setAutoDraw(True)
        if retrieval.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > retrieval.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                retrieval.tStop = t  # not accounting for scr refresh
                retrieval.frameNStop = frameN  # exact frame index
                win.timeOnFlip(retrieval, 'tStopRefresh')  # time at next scr refresh
                retrieval.setAutoDraw(False)
        # start/stop sound_1
        if sound_1.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
            # keep track of start time/frame for later
            sound_1.frameNStart = frameN  # exact frame index
            sound_1.tStart = t  # local t and not account for scr refresh
            sound_1.tStartRefresh = tThisFlipGlobal  # on global time
            sound_1.play(when=win)  # sync with win flip
        if sound_1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_1.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                sound_1.tStop = t  # not accounting for scr refresh
                sound_1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_1, 'tStopRefresh')  # time at next scr refresh
                sound_1.stop()
        
        # *dual_resp1* updates
        waitOnFlip = False
        if dual_resp1.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            dual_resp1.frameNStart = frameN  # exact frame index
            dual_resp1.tStart = t  # local t and not account for scr refresh
            dual_resp1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dual_resp1, 'tStartRefresh')  # time at next scr refresh
            dual_resp1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(dual_resp1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(dual_resp1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if dual_resp1.status == STARTED and not waitOnFlip:
            theseKeys = dual_resp1.getKeys(keyList=['left', 'right'], waitRelease=False)
            _dual_resp1_allKeys.extend(theseKeys)
            if len(_dual_resp1_allKeys):
                dual_resp1.keys = [key.name for key in _dual_resp1_allKeys]  # storing all keys
                dual_resp1.rt = [key.rt for key in _dual_resp1_allKeys]
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_s1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_s1"-------
    for thisComponent in trial_s1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loop.addData('retrieval.started', retrieval.tStartRefresh)
    exp_loop.addData('retrieval.stopped', retrieval.tStopRefresh)
    sound_1.stop()  # ensure sound has stopped at end of routine
    exp_loop.addData('sound_1.started', sound_1.tStartRefresh)
    exp_loop.addData('sound_1.stopped', sound_1.tStopRefresh)
    # check responses
    if dual_resp1.keys in ['', [], None]:  # No response was made
        dual_resp1.keys = None
    exp_loop.addData('dual_resp1.keys',dual_resp1.keys)
    if dual_resp1.keys != None:  # we had a response
        exp_loop.addData('dual_resp1.rt', dual_resp1.rt)
    exp_loop.addData('dual_resp1.started', dual_resp1.tStartRefresh)
    exp_loop.addData('dual_resp1.stopped', dual_resp1.tStopRefresh)
    # the Routine "trial_s1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trial_s2"-------
    continueRoutine = True
    # update component parameters for each repeat
    sound_2.setSound(sounds2, secs=1.5, hamming=True)
    sound_2.setVolume(1, log=False)
    dual_resp2.keys = []
    dual_resp2.rt = []
    _dual_resp2_allKeys = []
    # keep track of which components have finished
    trial_s2Components = [sound_2, dual_resp2]
    for thisComponent in trial_s2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trial_s2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial_s2"-------
    while continueRoutine:
        # get current time
        t = trial_s2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trial_s2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # start/stop sound_2
        if sound_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            sound_2.frameNStart = frameN  # exact frame index
            sound_2.tStart = t  # local t and not account for scr refresh
            sound_2.tStartRefresh = tThisFlipGlobal  # on global time
            sound_2.play(when=win)  # sync with win flip
        if sound_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                sound_2.tStop = t  # not accounting for scr refresh
                sound_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_2, 'tStopRefresh')  # time at next scr refresh
                sound_2.stop()
        
        # *dual_resp2* updates
        waitOnFlip = False
        if dual_resp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dual_resp2.frameNStart = frameN  # exact frame index
            dual_resp2.tStart = t  # local t and not account for scr refresh
            dual_resp2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dual_resp2, 'tStartRefresh')  # time at next scr refresh
            dual_resp2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(dual_resp2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(dual_resp2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if dual_resp2.status == STARTED and not waitOnFlip:
            theseKeys = dual_resp2.getKeys(keyList=['left', 'right'], waitRelease=False)
            _dual_resp2_allKeys.extend(theseKeys)
            if len(_dual_resp2_allKeys):
                dual_resp2.keys = _dual_resp2_allKeys[-1].name  # just the last key pressed
                dual_resp2.rt = _dual_resp2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trial_s2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial_s2"-------
    for thisComponent in trial_s2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_2.stop()  # ensure sound has stopped at end of routine
    exp_loop.addData('sound_2.started', sound_2.tStartRefresh)
    exp_loop.addData('sound_2.stopped', sound_2.tStopRefresh)
    # check responses
    if dual_resp2.keys in ['', [], None]:  # No response was made
        dual_resp2.keys = None
    exp_loop.addData('dual_resp2.keys',dual_resp2.keys)
    if dual_resp2.keys != None:  # we had a response
        exp_loop.addData('dual_resp2.rt', dual_resp2.rt)
    exp_loop.addData('dual_resp2.started', dual_resp2.tStartRefresh)
    exp_loop.addData('dual_resp2.stopped', dual_resp2.tStopRefresh)
    # the Routine "trial_s2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "retrieval_test"-------
    continueRoutine = True
    routineTimer.add(1.250000)
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    retrieval_testComponents = [polygon, mouse]
    for thisComponent in retrieval_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    retrieval_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "retrieval_test"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = retrieval_testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=retrieval_testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        if polygon.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                polygon.setAutoDraw(False)
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > mouse.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                mouse.tStop = t  # not accounting for scr refresh
                mouse.frameNStop = frameN  # exact frame index
                win.timeOnFlip(mouse, 'tStopRefresh')  # time at next scr refresh
                mouse.status = FINISHED
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # abort routine on response
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in retrieval_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "retrieval_test"-------
    for thisComponent in retrieval_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    exp_loop.addData('polygon.started', polygon.tStartRefresh)
    exp_loop.addData('polygon.stopped', polygon.tStopRefresh)
    # store data for exp_loop (TrialHandler)
    x, y = mouse.getPos()
    buttons = mouse.getPressed()
    exp_loop.addData('mouse.x', x)
    exp_loop.addData('mouse.y', y)
    exp_loop.addData('mouse.leftButton', buttons[0])
    exp_loop.addData('mouse.midButton', buttons[1])
    exp_loop.addData('mouse.rightButton', buttons[2])
    exp_loop.addData('mouse.started', mouse.tStart)
    exp_loop.addData('mouse.stopped', mouse.tStop)
    thisExp.nextEntry()
    
# completed 1 repeats of 'exp_loop'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
