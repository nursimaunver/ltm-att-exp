#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.4),
    on Thu Mar 11 00:55:53 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '4'
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
expName = 'pilot_v8_copy'  # from the Builder filename that created this script
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
    originPath='/Users/nursimaunver/Memory ryhthms/ltm-att-exp/pilot_v8_copy_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
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

# Initialize components for Routine "beginning"
beginningClock = core.Clock()
Exp_beginning = visual.TextStim(win=win, name='Exp_beginning',
    text='Welcome to the experiment\n\nIn the next pages you will see the instructions.\nPlease read them carefully.\n\n\nPress space to continue',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "instructions_1"
instructions_1Clock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='This experiment consists of X parts\n\nFirst, you will complete a practice session including all experimental blocks and get familiar with the experiment. \n\nThis should take approximately 10 mins.\n\n\nPress space to continue',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "instructions_2"
instructions_2Clock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text='After the practice session you will see the “Encoding Block”.\n\nIn the encoding block, you will see 80 objects located in a 360 degree wheel.\n\nPlease try to learn the locations of the objects as precise as possible\n\nPress space to continue',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "instructions_3"
instructions_3Clock = core.Clock()
text_14 = visual.TextStim(win=win, name='text_14',
    text='After the encoding block, you will start the “Practice Block”\n\nIn the practice block:\n\nYou will see each object in the center of the \nscreen\n\nYou should click on the previously learned location of that object on the 360 degree wheel.\n\nAfter you clicked, you should see the degree difference between the actual position and your response, as well as the object on the correct position.\n\nIf the degree difference is lower than 20 degrees you will be able to proceed to the next object, if not you will repeat the trial.\n\nThe practice block will end after you correctly identify all 80 objects’ locations.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "instructions_4"
instructions_4Clock = core.Clock()
text_15 = visual.TextStim(win=win, name='text_15',
    text='After the practice block, you will start the “Calculation Block”\n\nIn the calculation block:\n\nYou will see simple mathematical problems\n\nTry to respond as accurately as possible\n\nType your answers by the keyboard and press enter.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "instructions_5"
instructions_5Clock = core.Clock()
text_16 = visual.TextStim(win=win, name='text_16',
    text='After the Calculation block, you will start either sound or visual blocks.\n\nIn the sound block:\n\nYou first see one of the objects from initial encoding phase\n\nPlease start to remember the location of the object right after you see the object\n\nSecond, you will hear two numbers sequentially.\n\nIf the number is an odd number, press the left arrow key.\n\nIf the number is an even number, press the right arrow key.\n\nAfter that, you will see the response ring. \n\nYou should click on the location of the object you have seen at the beginning of the trial.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "instruction_6"
instruction_6Clock = core.Clock()
text_17 = visual.TextStim(win=win, name='text_17',
    text='In the visual block:\n\nYou first see one of the objects from initial encoding phase\n\nPlease start to remember the location of the object right after you see the object\n\nSecond, you will see different objects in random locations. \n\nPlease ignore those images and focus on remembering the first object’s location\n\nAfter that, you will see the response ring. \n\nYou should click on the location of the object you have seen at the beginning of the trial.\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "show_images"
show_imagesClock = core.Clock()
polygon_outside = visual.Polygon(
    win=win, name='polygon_outside',
    edges=100, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside = visual.Polygon(
    win=win, name='polygon_inside',
    edges=100, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
Stim_image = visual.ImageStim(
    win=win,
    name='Stim_image', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "blank500ms"
blank500msClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "practice_block"
practice_blockClock = core.Clock()
polygon_outside2 = visual.Polygon(
    win=win, name='polygon_outside2',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside2 = visual.Polygon(
    win=win, name='polygon_inside2',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
text_3 = visual.TextStim(win=win, name='text_3',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
polygon_outside3 = visual.Polygon(
    win=win, name='polygon_outside3',
    edges=99, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside3 = visual.Polygon(
    win=win, name='polygon_inside3',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
polygon = visual.Polygon(
    win=win, name='polygon',
    edges=99, size=(0.01, 0.01),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
feedback_Txt = visual.TextStim(win=win, name='feedback_Txt',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
polygon_4 = visual.Polygon(
    win=win, name='polygon_4',
    edges=999, size=(0.02, 0.02),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
text_10 = visual.TextStim(win=win, name='text_10',
    text='°',
    font='Arial',
    pos=(0.05, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "accuracy_2"
accuracy_2Clock = core.Clock()
wrong_list=[]

# Initialize components for Routine "practice_block"
practice_blockClock = core.Clock()
polygon_outside2 = visual.Polygon(
    win=win, name='polygon_outside2',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside2 = visual.Polygon(
    win=win, name='polygon_inside2',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
text_3 = visual.TextStim(win=win, name='text_3',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
polygon_outside3 = visual.Polygon(
    win=win, name='polygon_outside3',
    edges=99, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside3 = visual.Polygon(
    win=win, name='polygon_inside3',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
polygon = visual.Polygon(
    win=win, name='polygon',
    edges=99, size=(0.01, 0.01),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
feedback_Txt = visual.TextStim(win=win, name='feedback_Txt',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
image_3 = visual.ImageStim(
    win=win,
    name='image_3', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
polygon_4 = visual.Polygon(
    win=win, name='polygon_4',
    edges=999, size=(0.02, 0.02),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
text_10 = visual.TextStim(win=win, name='text_10',
    text='°',
    font='Arial',
    pos=(0.05, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "rt"
rtClock = core.Clock()

# Initialize components for Routine "check2"
check2Clock = core.Clock()

# Initialize components for Routine "blank500ms_2"
blank500ms_2Clock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "text_Prompt"
text_PromptClock = core.Clock()
filler1 = visual.TextStim(win=win, name='filler1',
    text='Calculate:\n',
    font='Arial',
    pos=(-0.2, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
targetText = visual.TextStim(win=win, name='targetText',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
instr = visual.TextStim(win=win, name='instr',
    text='Type the answer below, and press enter\n',
    font='Arial',
    pos=(-0.2, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
text = visual.TextStim(win=win, name='text',
    text='\n',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "blank500ms"
blank500msClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "sound1"
sound1Clock = core.Clock()
polygon_out = visual.Polygon(
    win=win, name='polygon_out',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_in = visual.Polygon(
    win=win, name='polygon_in',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
ret_cue = visual.ImageStim(
    win=win,
    name='ret_cue', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
sound_3 = sound.Sound('A', secs=1.5, stereo=True, hamming=True,
    name='sound_3')
sound_3.setVolume(1)
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "fixation_2"
fixation_2Clock = core.Clock()
polygon_out2 = visual.Polygon(
    win=win, name='polygon_out2',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_in2 = visual.Polygon(
    win=win, name='polygon_in2',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
text_7 = visual.TextStim(win=win, name='text_7',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "ret_test"
ret_testClock = core.Clock()
polygon_outside4 = visual.Polygon(
    win=win, name='polygon_outside4',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside4 = visual.Polygon(
    win=win, name='polygon_inside4',
    edges=99, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
text_8 = visual.TextStim(win=win, name='text_8',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()

# Initialize components for Routine "feedback2"
feedback2Clock = core.Clock()
polygon_outside6 = visual.Polygon(
    win=win, name='polygon_outside6',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside6 = visual.Polygon(
    win=win, name='polygon_inside6',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
polygon_2 = visual.Polygon(
    win=win, name='polygon_2',
    edges=99, size=(0.01, 0.01),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
text_9 = visual.TextStim(win=win, name='text_9',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
text_11 = visual.TextStim(win=win, name='text_11',
    text='°',
    font='Arial',
    pos=(0.05, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "ITI"
ITIClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='+\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "dist_img"
dist_imgClock = core.Clock()
polygon_out3 = visual.Polygon(
    win=win, name='polygon_out3',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_in3 = visual.Polygon(
    win=win, name='polygon_in3',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
ret = visual.ImageStim(
    win=win,
    name='ret', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.1, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
text_5 = visual.TextStim(win=win, name='text_5',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "dist2"
dist2Clock = core.Clock()
image_4 = visual.ImageStim(
    win=win,
    name='image_4', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
image_5 = visual.ImageStim(
    win=win,
    name='image_5', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
image_6 = visual.ImageStim(
    win=win,
    name='image_6', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
image_7 = visual.ImageStim(
    win=win,
    name='image_7', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
image_8 = visual.ImageStim(
    win=win,
    name='image_8', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
image_9 = visual.ImageStim(
    win=win,
    name='image_9', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.15, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)

# Initialize components for Routine "ret_dist_test"
ret_dist_testClock = core.Clock()
polygon_outside5 = visual.Polygon(
    win=win, name='polygon_outside5',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside5 = visual.Polygon(
    win=win, name='polygon_inside5',
    edges=99, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()

# Initialize components for Routine "feedback2"
feedback2Clock = core.Clock()
polygon_outside6 = visual.Polygon(
    win=win, name='polygon_outside6',
    edges=999, size=(0.82, 0.82),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[-1,-1,-1], fillColorSpace='rgb',
    opacity=0.5, depth=0.0, interpolate=True)
polygon_inside6 = visual.Polygon(
    win=win, name='polygon_inside6',
    edges=999, size=(0.78, 0.78),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,0,0], lineColorSpace='rgb',
    fillColor=[0,0,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
polygon_2 = visual.Polygon(
    win=win, name='polygon_2',
    edges=99, size=(0.01, 0.01),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
text_9 = visual.TextStim(win=win, name='text_9',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
text_11 = visual.TextStim(win=win, name='text_11',
    text='°',
    font='Arial',
    pos=(0.05, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "beginning"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
beginningComponents = [Exp_beginning, key_resp]
for thisComponent in beginningComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
beginningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "beginning"-------
while continueRoutine:
    # get current time
    t = beginningClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=beginningClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Exp_beginning* updates
    if Exp_beginning.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Exp_beginning.frameNStart = frameN  # exact frame index
        Exp_beginning.tStart = t  # local t and not account for scr refresh
        Exp_beginning.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Exp_beginning, 'tStartRefresh')  # time at next scr refresh
        Exp_beginning.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in beginningComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "beginning"-------
for thisComponent in beginningComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Exp_beginning.started', Exp_beginning.tStartRefresh)
thisExp.addData('Exp_beginning.stopped', Exp_beginning.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "beginning" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
instructions_1Components = [text_12, key_resp_5]
for thisComponent in instructions_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_1"-------
while continueRoutine:
    # get current time
    t = instructions_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        text_12.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_1"-------
for thisComponent in instructions_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_12.started', text_12.tStartRefresh)
thisExp.addData('text_12.stopped', text_12.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.addData('key_resp_5.started', key_resp_5.tStartRefresh)
thisExp.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
instructions_2Components = [text_13, key_resp_6]
for thisComponent in instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_2"-------
while continueRoutine:
    # get current time
    t = instructions_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_13* updates
    if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_13.frameNStart = frameN  # exact frame index
        text_13.tStart = t  # local t and not account for scr refresh
        text_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
        text_13.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_2"-------
for thisComponent in instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_13.started', text_13.tStartRefresh)
thisExp.addData('text_13.stopped', text_13.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.addData('key_resp_6.started', key_resp_6.tStartRefresh)
thisExp.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
instructions_3Components = [text_14, key_resp_7]
for thisComponent in instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_3"-------
while continueRoutine:
    # get current time
    t = instructions_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        text_14.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_3"-------
for thisComponent in instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_14.started', text_14.tStartRefresh)
thisExp.addData('text_14.stopped', text_14.tStopRefresh)
# check responses
if key_resp_7.keys in ['', [], None]:  # No response was made
    key_resp_7.keys = None
thisExp.addData('key_resp_7.keys',key_resp_7.keys)
if key_resp_7.keys != None:  # we had a response
    thisExp.addData('key_resp_7.rt', key_resp_7.rt)
thisExp.addData('key_resp_7.started', key_resp_7.tStartRefresh)
thisExp.addData('key_resp_7.stopped', key_resp_7.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_4"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
instructions_4Components = [text_15, key_resp_8]
for thisComponent in instructions_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_4"-------
while continueRoutine:
    # get current time
    t = instructions_4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_15* updates
    if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_15.frameNStart = frameN  # exact frame index
        text_15.tStart = t  # local t and not account for scr refresh
        text_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
        text_15.setAutoDraw(True)
    
    # *key_resp_8* updates
    waitOnFlip = False
    if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_8.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_8.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_4"-------
for thisComponent in instructions_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_15.started', text_15.tStartRefresh)
thisExp.addData('text_15.stopped', text_15.tStopRefresh)
# check responses
if key_resp_8.keys in ['', [], None]:  # No response was made
    key_resp_8.keys = None
thisExp.addData('key_resp_8.keys',key_resp_8.keys)
if key_resp_8.keys != None:  # we had a response
    thisExp.addData('key_resp_8.rt', key_resp_8.rt)
thisExp.addData('key_resp_8.started', key_resp_8.tStartRefresh)
thisExp.addData('key_resp_8.stopped', key_resp_8.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions_5"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
instructions_5Components = [text_16, key_resp_9]
for thisComponent in instructions_5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructions_5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions_5"-------
while continueRoutine:
    # get current time
    t = instructions_5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructions_5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_16* updates
    if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_16.frameNStart = frameN  # exact frame index
        text_16.tStart = t  # local t and not account for scr refresh
        text_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
        text_16.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions_5"-------
for thisComponent in instructions_5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_16.started', text_16.tStartRefresh)
thisExp.addData('text_16.stopped', text_16.tStopRefresh)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.addData('key_resp_9.started', key_resp_9.tStartRefresh)
thisExp.addData('key_resp_9.stopped', key_resp_9.tStopRefresh)
thisExp.nextEntry()
# the Routine "instructions_5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instruction_6"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
instruction_6Components = [text_17, key_resp_10]
for thisComponent in instruction_6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instruction_6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instruction_6"-------
while continueRoutine:
    # get current time
    t = instruction_6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instruction_6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instruction_6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instruction_6"-------
for thisComponent in instruction_6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_17.started', text_17.tStartRefresh)
thisExp.addData('text_17.stopped', text_17.tStopRefresh)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.addData('key_resp_10.started', key_resp_10.tStartRefresh)
thisExp.addData('key_resp_10.stopped', key_resp_10.tStopRefresh)
thisExp.nextEntry()
# the Routine "instruction_6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond.xlsx'),
    seed=None, name='trials_loop')
thisExp.addLoop(trials_loop)  # add the loop to the experiment
thisTrials_loop = trials_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
if thisTrials_loop != None:
    for paramName in thisTrials_loop:
        exec('{} = thisTrials_loop[paramName]'.format(paramName))

for thisTrials_loop in trials_loop:
    currentLoop = trials_loop
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
    if thisTrials_loop != None:
        for paramName in thisTrials_loop:
            exec('{} = thisTrials_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "show_images"-------
    continueRoutine = True
    routineTimer.add(0.200000)
    # update component parameters for each repeat
    Stim_image.setPos((object_location_x,object_location_y))
    Stim_image.setImage(objects)
    # keep track of which components have finished
    show_imagesComponents = [polygon_outside, polygon_inside, Stim_image]
    for thisComponent in show_imagesComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    show_imagesClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "show_images"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = show_imagesClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=show_imagesClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside* updates
        if polygon_outside.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside.frameNStart = frameN  # exact frame index
            polygon_outside.tStart = t  # local t and not account for scr refresh
            polygon_outside.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside, 'tStartRefresh')  # time at next scr refresh
            polygon_outside.setAutoDraw(True)
        if polygon_outside.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside.tStop = t  # not accounting for scr refresh
                polygon_outside.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside, 'tStopRefresh')  # time at next scr refresh
                polygon_outside.setAutoDraw(False)
        
        # *polygon_inside* updates
        if polygon_inside.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside.frameNStart = frameN  # exact frame index
            polygon_inside.tStart = t  # local t and not account for scr refresh
            polygon_inside.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside, 'tStartRefresh')  # time at next scr refresh
            polygon_inside.setAutoDraw(True)
        if polygon_inside.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside.tStop = t  # not accounting for scr refresh
                polygon_inside.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside, 'tStopRefresh')  # time at next scr refresh
                polygon_inside.setAutoDraw(False)
        
        # *Stim_image* updates
        if Stim_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Stim_image.frameNStart = frameN  # exact frame index
            Stim_image.tStart = t  # local t and not account for scr refresh
            Stim_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Stim_image, 'tStartRefresh')  # time at next scr refresh
            Stim_image.setAutoDraw(True)
        if Stim_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Stim_image.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                Stim_image.tStop = t  # not accounting for scr refresh
                Stim_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Stim_image, 'tStopRefresh')  # time at next scr refresh
                Stim_image.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in show_imagesComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "show_images"-------
    for thisComponent in show_imagesComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_loop.addData('polygon_outside.started', polygon_outside.tStartRefresh)
    trials_loop.addData('polygon_outside.stopped', polygon_outside.tStopRefresh)
    trials_loop.addData('polygon_inside.started', polygon_inside.tStartRefresh)
    trials_loop.addData('polygon_inside.stopped', polygon_inside.tStopRefresh)
    trials_loop.addData('Stim_image.started', Stim_image.tStartRefresh)
    trials_loop.addData('Stim_image.stopped', Stim_image.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_loop'


# ------Prepare to start Routine "blank500ms"-------
continueRoutine = True
routineTimer.add(0.500000)
# update component parameters for each repeat
# keep track of which components have finished
blank500msComponents = [fixation]
for thisComponent in blank500msComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
blank500msClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "blank500ms"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = blank500msClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=blank500msClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fixation* updates
    if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fixation.frameNStart = frameN  # exact frame index
        fixation.tStart = t  # local t and not account for scr refresh
        fixation.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
        fixation.setAutoDraw(True)
    if fixation.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            fixation.tStop = t  # not accounting for scr refresh
            fixation.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
            fixation.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in blank500msComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "blank500ms"-------
for thisComponent in blank500msComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fixation.started', fixation.tStartRefresh)
thisExp.addData('fixation.stopped', fixation.tStopRefresh)

# set up handler to look after randomisation of conditions etc
trials_practice = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond.xlsx'),
    seed=None, name='trials_practice')
thisExp.addLoop(trials_practice)  # add the loop to the experiment
thisTrials_practice = trials_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_practice.rgb)
if thisTrials_practice != None:
    for paramName in thisTrials_practice:
        exec('{} = thisTrials_practice[paramName]'.format(paramName))

for thisTrials_practice in trials_practice:
    currentLoop = trials_practice
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_practice.rgb)
    if thisTrials_practice != None:
        for paramName in thisTrials_practice:
            exec('{} = thisTrials_practice[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    image_2.setImage(study_objects)
    # setup some python lists for storing info about the mouse_4
    mouse_4.clicked_name = []
    mouse_4.clicked_pos = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    practice_blockComponents = [polygon_outside2, polygon_inside2, text_3, image_2, mouse_4]
    for thisComponent in practice_blockComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practice_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice_block"-------
    while continueRoutine:
        # get current time
        t = practice_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practice_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside2* updates
        if polygon_outside2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside2.frameNStart = frameN  # exact frame index
            polygon_outside2.tStart = t  # local t and not account for scr refresh
            polygon_outside2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside2, 'tStartRefresh')  # time at next scr refresh
            polygon_outside2.setAutoDraw(True)
        
        # *polygon_inside2* updates
        if polygon_inside2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside2.frameNStart = frameN  # exact frame index
            polygon_inside2.tStart = t  # local t and not account for scr refresh
            polygon_inside2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside2, 'tStartRefresh')  # time at next scr refresh
            polygon_inside2.setAutoDraw(True)
        
        # *text_3* updates
        if text_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            text_3.setAutoDraw(True)
        
        # *image_2* updates
        if image_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            image_2.frameNStart = frameN  # exact frame index
            image_2.tStart = t  # local t and not account for scr refresh
            image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
            image_2.setAutoDraw(True)
        # *mouse_4* updates
        if mouse_4.status == NOT_STARTED and t >= 0-frameTolerance:
            # keep track of start time/frame for later
            mouse_4.frameNStart = frameN  # exact frame index
            mouse_4.tStart = t  # local t and not account for scr refresh
            mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
            mouse_4.status = STARTED
            mouse_4.mouseClock.reset()
            prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
        if mouse_4.status == STARTED:  # only update if started and not finished!
            buttons = mouse_4.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [polygon_outside2]:
                        if obj.contains(mouse_4):
                            gotValidClick = True
                            mouse_4.clicked_name.append(obj.name)
                            mouse_4.clicked_pos.append(obj.pos)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_blockComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_block"-------
    for thisComponent in practice_blockComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_practice.addData('polygon_outside2.started', polygon_outside2.tStartRefresh)
    trials_practice.addData('polygon_outside2.stopped', polygon_outside2.tStopRefresh)
    trials_practice.addData('polygon_inside2.started', polygon_inside2.tStartRefresh)
    trials_practice.addData('polygon_inside2.stopped', polygon_inside2.tStopRefresh)
    trials_practice.addData('text_3.started', text_3.tStartRefresh)
    trials_practice.addData('text_3.stopped', text_3.tStopRefresh)
    trials_practice.addData('image_2.started', image_2.tStartRefresh)
    trials_practice.addData('image_2.stopped', image_2.tStopRefresh)
    # store data for trials_practice (TrialHandler)
    x, y = mouse_4.getPos()
    buttons = mouse_4.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [polygon_outside2]:
            if obj.contains(mouse_4):
                gotValidClick = True
                mouse_4.clicked_name.append(obj.name)
                mouse_4.clicked_pos.append(obj.pos)
    trials_practice.addData('mouse_4.x', x)
    trials_practice.addData('mouse_4.y', y)
    trials_practice.addData('mouse_4.leftButton', buttons[0])
    trials_practice.addData('mouse_4.midButton', buttons[1])
    trials_practice.addData('mouse_4.rightButton', buttons[2])
    if len(mouse_4.clicked_name):
        trials_practice.addData('mouse_4.clicked_name', mouse_4.clicked_name[0])
    if len(mouse_4.clicked_pos):
        trials_practice.addData('mouse_4.clicked_pos', mouse_4.clicked_pos[0])
    trials_practice.addData('mouse_4.started', mouse_4.tStart)
    trials_practice.addData('mouse_4.stopped', mouse_4.tStop)
    # the Routine "practice_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    import math
    resp_degree = math.atan2(x,y)/math.pi*180
    actual_degree = math.atan2(study_location_x,study_location_y)/math.pi*180
    degree_difference = round((resp_degree - actual_degree))
    degree_difference = abs(degree_difference)
    #msg = str(x) + "\n" + str(y) + "\n" + str(resp_degree) + "\n" + str(actual_degree) + "\n" + str(degree_difference)
    if (degree_difference >180):
        degree_difference=round(360 - degree_difference)
    else:
        degree_difference=round(degree_difference)
    polygon.setPos((x, y))
    feedback_Txt.setPos((0,0))
    feedback_Txt.setText(degree_difference





)
    image_3.setPos((study_location_x,study_location_y))
    image_3.setImage(study_objects)
    polygon_4.setPos((study_location_x,study_location_y))
    # keep track of which components have finished
    feedbackComponents = [polygon_outside3, polygon_inside3, polygon, feedback_Txt, image_3, polygon_4, text_10]
    for thisComponent in feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside3* updates
        if polygon_outside3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside3.frameNStart = frameN  # exact frame index
            polygon_outside3.tStart = t  # local t and not account for scr refresh
            polygon_outside3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside3, 'tStartRefresh')  # time at next scr refresh
            polygon_outside3.setAutoDraw(True)
        if polygon_outside3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside3.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside3.tStop = t  # not accounting for scr refresh
                polygon_outside3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside3, 'tStopRefresh')  # time at next scr refresh
                polygon_outside3.setAutoDraw(False)
        
        # *polygon_inside3* updates
        if polygon_inside3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside3.frameNStart = frameN  # exact frame index
            polygon_inside3.tStart = t  # local t and not account for scr refresh
            polygon_inside3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside3, 'tStartRefresh')  # time at next scr refresh
            polygon_inside3.setAutoDraw(True)
        if polygon_inside3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside3.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside3.tStop = t  # not accounting for scr refresh
                polygon_inside3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside3, 'tStopRefresh')  # time at next scr refresh
                polygon_inside3.setAutoDraw(False)
        
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
            if tThisFlipGlobal > polygon.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon.tStop = t  # not accounting for scr refresh
                polygon.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                polygon.setAutoDraw(False)
        
        # *feedback_Txt* updates
        if feedback_Txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_Txt.frameNStart = frameN  # exact frame index
            feedback_Txt.tStart = t  # local t and not account for scr refresh
            feedback_Txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_Txt, 'tStartRefresh')  # time at next scr refresh
            feedback_Txt.setAutoDraw(True)
        if feedback_Txt.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > feedback_Txt.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                feedback_Txt.tStop = t  # not accounting for scr refresh
                feedback_Txt.frameNStop = frameN  # exact frame index
                win.timeOnFlip(feedback_Txt, 'tStopRefresh')  # time at next scr refresh
                feedback_Txt.setAutoDraw(False)
        
        # *image_3* updates
        if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_3.frameNStart = frameN  # exact frame index
            image_3.tStart = t  # local t and not account for scr refresh
            image_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
            image_3.setAutoDraw(True)
        if image_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                image_3.tStop = t  # not accounting for scr refresh
                image_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_3, 'tStopRefresh')  # time at next scr refresh
                image_3.setAutoDraw(False)
        
        # *polygon_4* updates
        if polygon_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4.frameNStart = frameN  # exact frame index
            polygon_4.tStart = t  # local t and not account for scr refresh
            polygon_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4, 'tStartRefresh')  # time at next scr refresh
            polygon_4.setAutoDraw(True)
        if polygon_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_4.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                polygon_4.tStop = t  # not accounting for scr refresh
                polygon_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_4, 'tStopRefresh')  # time at next scr refresh
                polygon_4.setAutoDraw(False)
        
        # *text_10* updates
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            text_10.setAutoDraw(True)
        if text_10.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_10.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_10.tStop = t  # not accounting for scr refresh
                text_10.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_10, 'tStopRefresh')  # time at next scr refresh
                text_10.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback"-------
    for thisComponent in feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_practice.addData('polygon_outside3.started', polygon_outside3.tStartRefresh)
    trials_practice.addData('polygon_outside3.stopped', polygon_outside3.tStopRefresh)
    trials_practice.addData('polygon_inside3.started', polygon_inside3.tStartRefresh)
    trials_practice.addData('polygon_inside3.stopped', polygon_inside3.tStopRefresh)
    thisExp.addData('degree_difference', degree_difference)
    mouse_4.setPos(newPos=(0,0))
    
    
    trials_practice.addData('polygon.started', polygon.tStartRefresh)
    trials_practice.addData('polygon.stopped', polygon.tStopRefresh)
    trials_practice.addData('feedback_Txt.started', feedback_Txt.tStartRefresh)
    trials_practice.addData('feedback_Txt.stopped', feedback_Txt.tStopRefresh)
    trials_practice.addData('image_3.started', image_3.tStartRefresh)
    trials_practice.addData('image_3.stopped', image_3.tStopRefresh)
    trials_practice.addData('polygon_4.started', polygon_4.tStartRefresh)
    trials_practice.addData('polygon_4.stopped', polygon_4.tStopRefresh)
    trials_practice.addData('text_10.started', text_10.tStartRefresh)
    trials_practice.addData('text_10.stopped', text_10.tStopRefresh)
    
    # ------Prepare to start Routine "accuracy_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    acc=0
    if degree_difference< 20:
        acc=acc + 1
        countinueRoutine = False
    else:
        acc=acc
        rows=row_id-1
        wrong_list.append(rows)
        countinueRoutine = False
    # keep track of which components have finished
    accuracy_2Components = []
    for thisComponent in accuracy_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    accuracy_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "accuracy_2"-------
    while continueRoutine:
        # get current time
        t = accuracy_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=accuracy_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in accuracy_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "accuracy_2"-------
    for thisComponent in accuracy_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('wrong_list', wrong_list)
    thisExp.addData('accuracy', acc)
    # the Routine "accuracy_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_practice'


# set up handler to look after randomisation of conditions etc
trials_out = data.TrialHandler(nReps=100, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials_out')
thisExp.addLoop(trials_out)  # add the loop to the experiment
thisTrials_out = trials_out.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrials_out.rgb)
if thisTrials_out != None:
    for paramName in thisTrials_out:
        exec('{} = thisTrials_out[paramName]'.format(paramName))

for thisTrials_out in trials_out:
    currentLoop = trials_out
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_out.rgb)
    if thisTrials_out != None:
        for paramName in thisTrials_out:
            exec('{} = thisTrials_out[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials_2 = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('cond.xlsx', selection=wrong_list),
        seed=None, name='trials_2')
    thisExp.addLoop(trials_2)  # add the loop to the experiment
    thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    for thisTrial_2 in trials_2:
        currentLoop = trials_2
        # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
        if thisTrial_2 != None:
            for paramName in thisTrial_2:
                exec('{} = thisTrial_2[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "practice_block"-------
        continueRoutine = True
        # update component parameters for each repeat
        image_2.setImage(study_objects)
        # setup some python lists for storing info about the mouse_4
        mouse_4.clicked_name = []
        mouse_4.clicked_pos = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        practice_blockComponents = [polygon_outside2, polygon_inside2, text_3, image_2, mouse_4]
        for thisComponent in practice_blockComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        practice_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "practice_block"-------
        while continueRoutine:
            # get current time
            t = practice_blockClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=practice_blockClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *polygon_outside2* updates
            if polygon_outside2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_outside2.frameNStart = frameN  # exact frame index
                polygon_outside2.tStart = t  # local t and not account for scr refresh
                polygon_outside2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_outside2, 'tStartRefresh')  # time at next scr refresh
                polygon_outside2.setAutoDraw(True)
            
            # *polygon_inside2* updates
            if polygon_inside2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_inside2.frameNStart = frameN  # exact frame index
                polygon_inside2.tStart = t  # local t and not account for scr refresh
                polygon_inside2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_inside2, 'tStartRefresh')  # time at next scr refresh
                polygon_inside2.setAutoDraw(True)
            
            # *text_3* updates
            if text_3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                text_3.setAutoDraw(True)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                image_2.setAutoDraw(True)
            # *mouse_4* updates
            if mouse_4.status == NOT_STARTED and t >= 0-frameTolerance:
                # keep track of start time/frame for later
                mouse_4.frameNStart = frameN  # exact frame index
                mouse_4.tStart = t  # local t and not account for scr refresh
                mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
                mouse_4.status = STARTED
                mouse_4.mouseClock.reset()
                prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
            if mouse_4.status == STARTED:  # only update if started and not finished!
                buttons = mouse_4.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        for obj in [polygon_outside2]:
                            if obj.contains(mouse_4):
                                gotValidClick = True
                                mouse_4.clicked_name.append(obj.name)
                                mouse_4.clicked_pos.append(obj.pos)
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in practice_blockComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "practice_block"-------
        for thisComponent in practice_blockComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_2.addData('polygon_outside2.started', polygon_outside2.tStartRefresh)
        trials_2.addData('polygon_outside2.stopped', polygon_outside2.tStopRefresh)
        trials_2.addData('polygon_inside2.started', polygon_inside2.tStartRefresh)
        trials_2.addData('polygon_inside2.stopped', polygon_inside2.tStopRefresh)
        trials_2.addData('text_3.started', text_3.tStartRefresh)
        trials_2.addData('text_3.stopped', text_3.tStopRefresh)
        trials_2.addData('image_2.started', image_2.tStartRefresh)
        trials_2.addData('image_2.stopped', image_2.tStopRefresh)
        # store data for trials_2 (TrialHandler)
        x, y = mouse_4.getPos()
        buttons = mouse_4.getPressed()
        if sum(buttons):
            # check if the mouse was inside our 'clickable' objects
            gotValidClick = False
            for obj in [polygon_outside2]:
                if obj.contains(mouse_4):
                    gotValidClick = True
                    mouse_4.clicked_name.append(obj.name)
                    mouse_4.clicked_pos.append(obj.pos)
        trials_2.addData('mouse_4.x', x)
        trials_2.addData('mouse_4.y', y)
        trials_2.addData('mouse_4.leftButton', buttons[0])
        trials_2.addData('mouse_4.midButton', buttons[1])
        trials_2.addData('mouse_4.rightButton', buttons[2])
        if len(mouse_4.clicked_name):
            trials_2.addData('mouse_4.clicked_name', mouse_4.clicked_name[0])
        if len(mouse_4.clicked_pos):
            trials_2.addData('mouse_4.clicked_pos', mouse_4.clicked_pos[0])
        trials_2.addData('mouse_4.started', mouse_4.tStart)
        trials_2.addData('mouse_4.stopped', mouse_4.tStop)
        # the Routine "practice_block" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        import math
        resp_degree = math.atan2(x,y)/math.pi*180
        actual_degree = math.atan2(study_location_x,study_location_y)/math.pi*180
        degree_difference = round((resp_degree - actual_degree))
        degree_difference = abs(degree_difference)
        #msg = str(x) + "\n" + str(y) + "\n" + str(resp_degree) + "\n" + str(actual_degree) + "\n" + str(degree_difference)
        if (degree_difference >180):
            degree_difference=round(360 - degree_difference)
        else:
            degree_difference=round(degree_difference)
        polygon.setPos((x, y))
        feedback_Txt.setPos((0,0))
        feedback_Txt.setText(degree_difference





)
        image_3.setPos((study_location_x,study_location_y))
        image_3.setImage(study_objects)
        polygon_4.setPos((study_location_x,study_location_y))
        # keep track of which components have finished
        feedbackComponents = [polygon_outside3, polygon_inside3, polygon, feedback_Txt, image_3, polygon_4, text_10]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *polygon_outside3* updates
            if polygon_outside3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_outside3.frameNStart = frameN  # exact frame index
                polygon_outside3.tStart = t  # local t and not account for scr refresh
                polygon_outside3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_outside3, 'tStartRefresh')  # time at next scr refresh
                polygon_outside3.setAutoDraw(True)
            if polygon_outside3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon_outside3.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon_outside3.tStop = t  # not accounting for scr refresh
                    polygon_outside3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon_outside3, 'tStopRefresh')  # time at next scr refresh
                    polygon_outside3.setAutoDraw(False)
            
            # *polygon_inside3* updates
            if polygon_inside3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_inside3.frameNStart = frameN  # exact frame index
                polygon_inside3.tStart = t  # local t and not account for scr refresh
                polygon_inside3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_inside3, 'tStartRefresh')  # time at next scr refresh
                polygon_inside3.setAutoDraw(True)
            if polygon_inside3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon_inside3.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon_inside3.tStop = t  # not accounting for scr refresh
                    polygon_inside3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon_inside3, 'tStopRefresh')  # time at next scr refresh
                    polygon_inside3.setAutoDraw(False)
            
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
                if tThisFlipGlobal > polygon.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon, 'tStopRefresh')  # time at next scr refresh
                    polygon.setAutoDraw(False)
            
            # *feedback_Txt* updates
            if feedback_Txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_Txt.frameNStart = frameN  # exact frame index
                feedback_Txt.tStart = t  # local t and not account for scr refresh
                feedback_Txt.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_Txt, 'tStartRefresh')  # time at next scr refresh
                feedback_Txt.setAutoDraw(True)
            if feedback_Txt.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_Txt.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_Txt.tStop = t  # not accounting for scr refresh
                    feedback_Txt.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(feedback_Txt, 'tStopRefresh')  # time at next scr refresh
                    feedback_Txt.setAutoDraw(False)
            
            # *image_3* updates
            if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_3.frameNStart = frameN  # exact frame index
                image_3.tStart = t  # local t and not account for scr refresh
                image_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
                image_3.setAutoDraw(True)
            if image_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_3.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    image_3.tStop = t  # not accounting for scr refresh
                    image_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(image_3, 'tStopRefresh')  # time at next scr refresh
                    image_3.setAutoDraw(False)
            
            # *polygon_4* updates
            if polygon_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_4.frameNStart = frameN  # exact frame index
                polygon_4.tStart = t  # local t and not account for scr refresh
                polygon_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_4, 'tStartRefresh')  # time at next scr refresh
                polygon_4.setAutoDraw(True)
            if polygon_4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon_4.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon_4.tStop = t  # not accounting for scr refresh
                    polygon_4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(polygon_4, 'tStopRefresh')  # time at next scr refresh
                    polygon_4.setAutoDraw(False)
            
            # *text_10* updates
            if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_10.frameNStart = frameN  # exact frame index
                text_10.tStart = t  # local t and not account for scr refresh
                text_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
                text_10.setAutoDraw(True)
            if text_10.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_10.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    text_10.tStop = t  # not accounting for scr refresh
                    text_10.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(text_10, 'tStopRefresh')  # time at next scr refresh
                    text_10.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback"-------
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_2.addData('polygon_outside3.started', polygon_outside3.tStartRefresh)
        trials_2.addData('polygon_outside3.stopped', polygon_outside3.tStopRefresh)
        trials_2.addData('polygon_inside3.started', polygon_inside3.tStartRefresh)
        trials_2.addData('polygon_inside3.stopped', polygon_inside3.tStopRefresh)
        thisExp.addData('degree_difference', degree_difference)
        mouse_4.setPos(newPos=(0,0))
        
        
        trials_2.addData('polygon.started', polygon.tStartRefresh)
        trials_2.addData('polygon.stopped', polygon.tStopRefresh)
        trials_2.addData('feedback_Txt.started', feedback_Txt.tStartRefresh)
        trials_2.addData('feedback_Txt.stopped', feedback_Txt.tStopRefresh)
        trials_2.addData('image_3.started', image_3.tStartRefresh)
        trials_2.addData('image_3.stopped', image_3.tStopRefresh)
        trials_2.addData('polygon_4.started', polygon_4.tStartRefresh)
        trials_2.addData('polygon_4.stopped', polygon_4.tStopRefresh)
        trials_2.addData('text_10.started', text_10.tStartRefresh)
        trials_2.addData('text_10.stopped', text_10.tStopRefresh)
        
        # ------Prepare to start Routine "rt"-------
        continueRoutine = True
        # update component parameters for each repeat
        if degree_difference< 20:
            rows=row_id-1
            wrong_list.pop(wrong_list.index(rows))
            countinueRoutine = False
        
        # keep track of which components have finished
        rtComponents = []
        for thisComponent in rtComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        rtClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "rt"-------
        while continueRoutine:
            # get current time
            t = rtClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=rtClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rtComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "rt"-------
        for thisComponent in rtComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "rt" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_2'
    
    
    # ------Prepare to start Routine "check2"-------
    continueRoutine = True
    # update component parameters for each repeat
    if len(wrong_list)==0:
        trials_out.finished=True
    # keep track of which components have finished
    check2Components = []
    for thisComponent in check2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    check2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "check2"-------
    while continueRoutine:
        # get current time
        t = check2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=check2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "check2"-------
    for thisComponent in check2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "check2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 100 repeats of 'trials_out'


# ------Prepare to start Routine "blank500ms_2"-------
continueRoutine = True
routineTimer.add(0.500000)
# update component parameters for each repeat
# keep track of which components have finished
blank500ms_2Components = [text_2]
for thisComponent in blank500ms_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
blank500ms_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "blank500ms_2"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = blank500ms_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=blank500ms_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    if text_2.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_2.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            text_2.tStop = t  # not accounting for scr refresh
            text_2.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
            text_2.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in blank500ms_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "blank500ms_2"-------
for thisComponent in blank500ms_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "text_Prompt"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    targetText.setText(calc)
    # keep track of which components have finished
    text_PromptComponents = [filler1, targetText]
    for thisComponent in text_PromptComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    text_PromptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "text_Prompt"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = text_PromptClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=text_PromptClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *filler1* updates
        if filler1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            filler1.frameNStart = frameN  # exact frame index
            filler1.tStart = t  # local t and not account for scr refresh
            filler1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(filler1, 'tStartRefresh')  # time at next scr refresh
            filler1.setAutoDraw(True)
        if filler1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > filler1.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                filler1.tStop = t  # not accounting for scr refresh
                filler1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(filler1, 'tStopRefresh')  # time at next scr refresh
                filler1.setAutoDraw(False)
        
        # *targetText* updates
        if targetText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            targetText.frameNStart = frameN  # exact frame index
            targetText.tStart = t  # local t and not account for scr refresh
            targetText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(targetText, 'tStartRefresh')  # time at next scr refresh
            targetText.setAutoDraw(True)
        if targetText.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > targetText.tStartRefresh + 1-frameTolerance:
                # keep track of stop time/frame for later
                targetText.tStop = t  # not accounting for scr refresh
                targetText.frameNStop = frameN  # exact frame index
                win.timeOnFlip(targetText, 'tStopRefresh')  # time at next scr refresh
                targetText.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in text_PromptComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "text_Prompt"-------
    for thisComponent in text_PromptComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('filler1.started', filler1.tStartRefresh)
    trials.addData('filler1.stopped', filler1.tStopRefresh)
    trials.addData('targetText.started', targetText.tStartRefresh)
    trials.addData('targetText.stopped', targetText.tStopRefresh)
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    modify = False
    text.text = ''
    event.clearEvents('keyboard')
    # keep track of which components have finished
    trialComponents = [instr, text]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr* updates
        if instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr.frameNStart = frameN  # exact frame index
            instr.tStart = t  # local t and not account for scr refresh
            instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr, 'tStartRefresh')  # time at next scr refresh
            instr.setAutoDraw(True)
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        keys = event.getKeys()
        if len(keys):
            if 'space' in keys:
                text.text = text.text + ' '
            elif 'backspace' in keys:
                text.text = text.text[:-1]
            elif 'lshift' in keys or 'rshift' in keys:
                modify = True
            elif 'return' in keys:
                continueRoutine = False
            else:
                if modify:
                    text.text = text.text + keys[0].upper()
                    modify = False
                else:
                    text.text = text.text + keys[0]
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('instr.started', instr.tStartRefresh)
    trials.addData('instr.stopped', instr.tStopRefresh)
    trials.addData('text.started', text.tStartRefresh)
    trials.addData('text.stopped', text.tStopRefresh)
    thisExp.addData("typedWord", text.text)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "blank500ms"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    blank500msComponents = [fixation]
    for thisComponent in blank500msComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    blank500msClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "blank500ms"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = blank500msClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=blank500msClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation* updates
        if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation.frameNStart = frameN  # exact frame index
            fixation.tStart = t  # local t and not account for scr refresh
            fixation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
            fixation.setAutoDraw(True)
        if fixation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation.tStop = t  # not accounting for scr refresh
                fixation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                fixation.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank500msComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "blank500ms"-------
    for thisComponent in blank500msComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation.started', fixation.tStartRefresh)
    trials.addData('fixation.stopped', fixation.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# set up handler to look after randomisation of conditions etc
sound_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond.xlsx'),
    seed=None, name='sound_loop')
thisExp.addLoop(sound_loop)  # add the loop to the experiment
thisSound_loop = sound_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisSound_loop.rgb)
if thisSound_loop != None:
    for paramName in thisSound_loop:
        exec('{} = thisSound_loop[paramName]'.format(paramName))

for thisSound_loop in sound_loop:
    currentLoop = sound_loop
    # abbreviate parameter names if possible (e.g. rgb = thisSound_loop.rgb)
    if thisSound_loop != None:
        for paramName in thisSound_loop:
            exec('{} = thisSound_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "sound1"-------
    continueRoutine = True
    routineTimer.add(3.200000)
    # update component parameters for each repeat
    ret_cue.setImage(objects)
    sound_3.setSound(sounds1, secs=1.5, hamming=True)
    sound_3.setVolume(1, log=False)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    sound1Components = [polygon_out, polygon_in, ret_cue, sound_3, key_resp_2]
    for thisComponent in sound1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    sound1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "sound1"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = sound1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=sound1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_out* updates
        if polygon_out.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_out.frameNStart = frameN  # exact frame index
            polygon_out.tStart = t  # local t and not account for scr refresh
            polygon_out.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_out, 'tStartRefresh')  # time at next scr refresh
            polygon_out.setAutoDraw(True)
        if polygon_out.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_out.tStartRefresh + 3.2-frameTolerance:
                # keep track of stop time/frame for later
                polygon_out.tStop = t  # not accounting for scr refresh
                polygon_out.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_out, 'tStopRefresh')  # time at next scr refresh
                polygon_out.setAutoDraw(False)
        
        # *polygon_in* updates
        if polygon_in.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_in.frameNStart = frameN  # exact frame index
            polygon_in.tStart = t  # local t and not account for scr refresh
            polygon_in.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_in, 'tStartRefresh')  # time at next scr refresh
            polygon_in.setAutoDraw(True)
        if polygon_in.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_in.tStartRefresh + 3.2-frameTolerance:
                # keep track of stop time/frame for later
                polygon_in.tStop = t  # not accounting for scr refresh
                polygon_in.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_in, 'tStopRefresh')  # time at next scr refresh
                polygon_in.setAutoDraw(False)
        
        # *ret_cue* updates
        if ret_cue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ret_cue.frameNStart = frameN  # exact frame index
            ret_cue.tStart = t  # local t and not account for scr refresh
            ret_cue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ret_cue, 'tStartRefresh')  # time at next scr refresh
            ret_cue.setAutoDraw(True)
        if ret_cue.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > ret_cue.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                ret_cue.tStop = t  # not accounting for scr refresh
                ret_cue.frameNStop = frameN  # exact frame index
                win.timeOnFlip(ret_cue, 'tStopRefresh')  # time at next scr refresh
                ret_cue.setAutoDraw(False)
        # start/stop sound_3
        if sound_3.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
            # keep track of start time/frame for later
            sound_3.frameNStart = frameN  # exact frame index
            sound_3.tStart = t  # local t and not account for scr refresh
            sound_3.tStartRefresh = tThisFlipGlobal  # on global time
            sound_3.play(when=win)  # sync with win flip
        if sound_3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > sound_3.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                sound_3.tStop = t  # not accounting for scr refresh
                sound_3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(sound_3, 'tStopRefresh')  # time at next scr refresh
                sound_3.stop()
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_2.tStop = t  # not accounting for scr refresh
                key_resp_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
                key_resp_2.status = FINISHED
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in sound1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "sound1"-------
    for thisComponent in sound1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_loop.addData('polygon_out.started', polygon_out.tStartRefresh)
    sound_loop.addData('polygon_out.stopped', polygon_out.tStopRefresh)
    sound_loop.addData('polygon_in.started', polygon_in.tStartRefresh)
    sound_loop.addData('polygon_in.stopped', polygon_in.tStopRefresh)
    sound_loop.addData('ret_cue.started', ret_cue.tStartRefresh)
    sound_loop.addData('ret_cue.stopped', ret_cue.tStopRefresh)
    sound_3.stop()  # ensure sound has stopped at end of routine
    sound_loop.addData('sound_3.started', sound_3.tStartRefresh)
    sound_loop.addData('sound_3.stopped', sound_3.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    sound_loop.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        sound_loop.addData('key_resp_2.rt', key_resp_2.rt)
    sound_loop.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    sound_loop.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    
    # ------Prepare to start Routine "fixation_2"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_2Components = [polygon_out2, polygon_in2, text_7]
    for thisComponent in fixation_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_out2* updates
        if polygon_out2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_out2.frameNStart = frameN  # exact frame index
            polygon_out2.tStart = t  # local t and not account for scr refresh
            polygon_out2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_out2, 'tStartRefresh')  # time at next scr refresh
            polygon_out2.setAutoDraw(True)
        if polygon_out2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_out2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                polygon_out2.tStop = t  # not accounting for scr refresh
                polygon_out2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_out2, 'tStopRefresh')  # time at next scr refresh
                polygon_out2.setAutoDraw(False)
        
        # *polygon_in2* updates
        if polygon_in2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_in2.frameNStart = frameN  # exact frame index
            polygon_in2.tStart = t  # local t and not account for scr refresh
            polygon_in2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_in2, 'tStartRefresh')  # time at next scr refresh
            polygon_in2.setAutoDraw(True)
        if polygon_in2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_in2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                polygon_in2.tStop = t  # not accounting for scr refresh
                polygon_in2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_in2, 'tStopRefresh')  # time at next scr refresh
                polygon_in2.setAutoDraw(False)
        
        # *text_7* updates
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            text_7.setAutoDraw(True)
        if text_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_7.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                text_7.tStop = t  # not accounting for scr refresh
                text_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_7, 'tStopRefresh')  # time at next scr refresh
                text_7.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_2"-------
    for thisComponent in fixation_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_loop.addData('polygon_out2.started', polygon_out2.tStartRefresh)
    sound_loop.addData('polygon_out2.stopped', polygon_out2.tStopRefresh)
    sound_loop.addData('polygon_in2.started', polygon_in2.tStartRefresh)
    sound_loop.addData('polygon_in2.stopped', polygon_in2.tStopRefresh)
    sound_loop.addData('text_7.started', text_7.tStartRefresh)
    sound_loop.addData('text_7.stopped', text_7.tStopRefresh)
    
    # ------Prepare to start Routine "ret_test"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_6
    mouse_6.clicked_name = []
    mouse_6.clicked_pos = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    ret_testComponents = [polygon_outside4, polygon_inside4, text_8, mouse_6]
    for thisComponent in ret_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ret_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ret_test"-------
    while continueRoutine:
        # get current time
        t = ret_testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ret_testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside4* updates
        if polygon_outside4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside4.frameNStart = frameN  # exact frame index
            polygon_outside4.tStart = t  # local t and not account for scr refresh
            polygon_outside4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside4, 'tStartRefresh')  # time at next scr refresh
            polygon_outside4.setAutoDraw(True)
        if polygon_outside4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside4.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside4.tStop = t  # not accounting for scr refresh
                polygon_outside4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside4, 'tStopRefresh')  # time at next scr refresh
                polygon_outside4.setAutoDraw(False)
        
        # *polygon_inside4* updates
        if polygon_inside4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside4.frameNStart = frameN  # exact frame index
            polygon_inside4.tStart = t  # local t and not account for scr refresh
            polygon_inside4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside4, 'tStartRefresh')  # time at next scr refresh
            polygon_inside4.setAutoDraw(True)
        if polygon_inside4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside4.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside4.tStop = t  # not accounting for scr refresh
                polygon_inside4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside4, 'tStopRefresh')  # time at next scr refresh
                polygon_inside4.setAutoDraw(False)
        
        # *text_8* updates
        if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_8.frameNStart = frameN  # exact frame index
            text_8.tStart = t  # local t and not account for scr refresh
            text_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
            text_8.setAutoDraw(True)
        if text_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_8.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_8.tStop = t  # not accounting for scr refresh
                text_8.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_8, 'tStopRefresh')  # time at next scr refresh
                text_8.setAutoDraw(False)
        # *mouse_6* updates
        if mouse_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_6.frameNStart = frameN  # exact frame index
            mouse_6.tStart = t  # local t and not account for scr refresh
            mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
            mouse_6.status = STARTED
            mouse_6.mouseClock.reset()
            prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
        if mouse_6.status == STARTED:  # only update if started and not finished!
            buttons = mouse_6.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [polygon_outside4]:
                        if obj.contains(mouse_6):
                            gotValidClick = True
                            mouse_6.clicked_name.append(obj.name)
                            mouse_6.clicked_pos.append(obj.pos)
                    # abort routine on response
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ret_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ret_test"-------
    for thisComponent in ret_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_loop.addData('polygon_outside4.started', polygon_outside4.tStartRefresh)
    sound_loop.addData('polygon_outside4.stopped', polygon_outside4.tStopRefresh)
    sound_loop.addData('polygon_inside4.started', polygon_inside4.tStartRefresh)
    sound_loop.addData('polygon_inside4.stopped', polygon_inside4.tStopRefresh)
    sound_loop.addData('text_8.started', text_8.tStartRefresh)
    sound_loop.addData('text_8.stopped', text_8.tStopRefresh)
    # store data for sound_loop (TrialHandler)
    x, y = mouse_6.getPos()
    buttons = mouse_6.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [polygon_outside4]:
            if obj.contains(mouse_6):
                gotValidClick = True
                mouse_6.clicked_name.append(obj.name)
                mouse_6.clicked_pos.append(obj.pos)
    sound_loop.addData('mouse_6.x', x)
    sound_loop.addData('mouse_6.y', y)
    sound_loop.addData('mouse_6.leftButton', buttons[0])
    sound_loop.addData('mouse_6.midButton', buttons[1])
    sound_loop.addData('mouse_6.rightButton', buttons[2])
    if len(mouse_6.clicked_name):
        sound_loop.addData('mouse_6.clicked_name', mouse_6.clicked_name[0])
    if len(mouse_6.clicked_pos):
        sound_loop.addData('mouse_6.clicked_pos', mouse_6.clicked_pos[0])
    sound_loop.addData('mouse_6.started', mouse_6.tStart)
    sound_loop.addData('mouse_6.stopped', mouse_6.tStop)
    mouse_6.setPos(newPos=(0,0))
    # the Routine "ret_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback2"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    import math
    resp_degree = math.atan2(x,y)/math.pi*180
    actual_degree = math.atan2(object_location_x,object_location_y)/math.pi*180
    degree_difference = round((resp_degree - actual_degree))
    degree_difference = abs(degree_difference)
    #msg = str(x) + "\n" + str(y) + "\n" + str(resp_degree) + "\n" + str(actual_degree) + "\n" + str(degree_difference)
    if (degree_difference >180):
        degree_difference=round(360 - degree_difference)
    else:
        degree_difference=round(degree_difference)
    polygon_2.setPos((x, y))
    text_9.setText(degree_difference
)
    # keep track of which components have finished
    feedback2Components = [polygon_outside6, polygon_inside6, polygon_2, text_9, text_11]
    for thisComponent in feedback2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside6* updates
        if polygon_outside6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside6.frameNStart = frameN  # exact frame index
            polygon_outside6.tStart = t  # local t and not account for scr refresh
            polygon_outside6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside6, 'tStartRefresh')  # time at next scr refresh
            polygon_outside6.setAutoDraw(True)
        if polygon_outside6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside6.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside6.tStop = t  # not accounting for scr refresh
                polygon_outside6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside6, 'tStopRefresh')  # time at next scr refresh
                polygon_outside6.setAutoDraw(False)
        
        # *polygon_inside6* updates
        if polygon_inside6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside6.frameNStart = frameN  # exact frame index
            polygon_inside6.tStart = t  # local t and not account for scr refresh
            polygon_inside6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside6, 'tStartRefresh')  # time at next scr refresh
            polygon_inside6.setAutoDraw(True)
        if polygon_inside6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside6.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside6.tStop = t  # not accounting for scr refresh
                polygon_inside6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside6, 'tStopRefresh')  # time at next scr refresh
                polygon_inside6.setAutoDraw(False)
        
        # *polygon_2* updates
        if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2.frameNStart = frameN  # exact frame index
            polygon_2.tStart = t  # local t and not account for scr refresh
            polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
            polygon_2.setAutoDraw(True)
        if polygon_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_2.tStop = t  # not accounting for scr refresh
                polygon_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_2, 'tStopRefresh')  # time at next scr refresh
                polygon_2.setAutoDraw(False)
        
        # *text_9* updates
        if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            text_9.setAutoDraw(True)
        if text_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_9.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_9.tStop = t  # not accounting for scr refresh
                text_9.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_9, 'tStopRefresh')  # time at next scr refresh
                text_9.setAutoDraw(False)
        
        # *text_11* updates
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            text_11.setAutoDraw(True)
        if text_11.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_11.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_11.tStop = t  # not accounting for scr refresh
                text_11.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_11, 'tStopRefresh')  # time at next scr refresh
                text_11.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback2"-------
    for thisComponent in feedback2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_loop.addData('polygon_outside6.started', polygon_outside6.tStartRefresh)
    sound_loop.addData('polygon_outside6.stopped', polygon_outside6.tStopRefresh)
    sound_loop.addData('polygon_inside6.started', polygon_inside6.tStartRefresh)
    sound_loop.addData('polygon_inside6.stopped', polygon_inside6.tStopRefresh)
    thisExp.addData('degree_difference', degree_difference)
    
    sound_loop.addData('polygon_2.started', polygon_2.tStartRefresh)
    sound_loop.addData('polygon_2.stopped', polygon_2.tStopRefresh)
    sound_loop.addData('text_9.started', text_9.tStartRefresh)
    sound_loop.addData('text_9.stopped', text_9.tStopRefresh)
    sound_loop.addData('text_11.started', text_11.tStartRefresh)
    sound_loop.addData('text_11.stopped', text_11.tStopRefresh)
    
    # ------Prepare to start Routine "ITI"-------
    continueRoutine = True
    routineTimer.add(0.750000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ITIComponents = [text_4]
    for thisComponent in ITIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ITIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ITI"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ITIClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ITIClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        if text_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_4.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                text_4.tStop = t  # not accounting for scr refresh
                text_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_4, 'tStopRefresh')  # time at next scr refresh
                text_4.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ITI"-------
    for thisComponent in ITIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    sound_loop.addData('text_4.started', text_4.tStartRefresh)
    sound_loop.addData('text_4.stopped', text_4.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'sound_loop'


# set up handler to look after randomisation of conditions etc
dist_loop = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('cond.xlsx'),
    seed=None, name='dist_loop')
thisExp.addLoop(dist_loop)  # add the loop to the experiment
thisDist_loop = dist_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDist_loop.rgb)
if thisDist_loop != None:
    for paramName in thisDist_loop:
        exec('{} = thisDist_loop[paramName]'.format(paramName))

for thisDist_loop in dist_loop:
    currentLoop = dist_loop
    # abbreviate parameter names if possible (e.g. rgb = thisDist_loop.rgb)
    if thisDist_loop != None:
        for paramName in thisDist_loop:
            exec('{} = thisDist_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "dist_img"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    ret.setImage(objects)
    # keep track of which components have finished
    dist_imgComponents = [polygon_out3, polygon_in3, ret, text_5]
    for thisComponent in dist_imgComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    dist_imgClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "dist_img"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = dist_imgClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=dist_imgClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_out3* updates
        if polygon_out3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_out3.frameNStart = frameN  # exact frame index
            polygon_out3.tStart = t  # local t and not account for scr refresh
            polygon_out3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_out3, 'tStartRefresh')  # time at next scr refresh
            polygon_out3.setAutoDraw(True)
        if polygon_out3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_out3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_out3.tStop = t  # not accounting for scr refresh
                polygon_out3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_out3, 'tStopRefresh')  # time at next scr refresh
                polygon_out3.setAutoDraw(False)
        
        # *polygon_in3* updates
        if polygon_in3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_in3.frameNStart = frameN  # exact frame index
            polygon_in3.tStart = t  # local t and not account for scr refresh
            polygon_in3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_in3, 'tStartRefresh')  # time at next scr refresh
            polygon_in3.setAutoDraw(True)
        if polygon_in3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_in3.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_in3.tStop = t  # not accounting for scr refresh
                polygon_in3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_in3, 'tStopRefresh')  # time at next scr refresh
                polygon_in3.setAutoDraw(False)
        
        # *ret* updates
        if ret.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ret.frameNStart = frameN  # exact frame index
            ret.tStart = t  # local t and not account for scr refresh
            ret.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ret, 'tStartRefresh')  # time at next scr refresh
            ret.setAutoDraw(True)
        if ret.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > ret.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                ret.tStop = t  # not accounting for scr refresh
                ret.frameNStop = frameN  # exact frame index
                win.timeOnFlip(ret, 'tStopRefresh')  # time at next scr refresh
                ret.setAutoDraw(False)
        
        # *text_5* updates
        if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_5.frameNStart = frameN  # exact frame index
            text_5.tStart = t  # local t and not account for scr refresh
            text_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
            text_5.setAutoDraw(True)
        if text_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_5.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_5.tStop = t  # not accounting for scr refresh
                text_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_5, 'tStopRefresh')  # time at next scr refresh
                text_5.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dist_imgComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "dist_img"-------
    for thisComponent in dist_imgComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    dist_loop.addData('polygon_out3.started', polygon_out3.tStartRefresh)
    dist_loop.addData('polygon_out3.stopped', polygon_out3.tStopRefresh)
    dist_loop.addData('polygon_in3.started', polygon_in3.tStartRefresh)
    dist_loop.addData('polygon_in3.stopped', polygon_in3.tStopRefresh)
    dist_loop.addData('ret.started', ret.tStartRefresh)
    dist_loop.addData('ret.stopped', ret.tStopRefresh)
    dist_loop.addData('text_5.started', text_5.tStartRefresh)
    dist_loop.addData('text_5.stopped', text_5.tStopRefresh)
    
    # ------Prepare to start Routine "dist2"-------
    continueRoutine = True
    routineTimer.add(3.000000)
    # update component parameters for each repeat
    image_4.setPos((dist1_location_x, dist1_location_y))
    image_4.setImage(dist1)
    image_5.setPos((dist2_location_x, dist2_location_y))
    image_5.setImage(dist2)
    image_6.setPos((dist3_location_x, dist3_location_y))
    image_6.setImage(dist3)
    image_7.setPos((dist4_location_x, dist4_location_y))
    image_7.setImage(dist4)
    image_8.setPos((dist5_location_x, dist5_location_y))
    image_8.setImage(dist5)
    image_9.setPos((dist6_location_x, dist6_location_y))
    image_9.setImage(dist6)
    # keep track of which components have finished
    dist2Components = [image_4, image_5, image_6, image_7, image_8, image_9]
    for thisComponent in dist2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    dist2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "dist2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = dist2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=dist2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_4* updates
        if image_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_4.frameNStart = frameN  # exact frame index
            image_4.tStart = t  # local t and not account for scr refresh
            image_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_4, 'tStartRefresh')  # time at next scr refresh
            image_4.setAutoDraw(True)
        if image_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_4.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_4.tStop = t  # not accounting for scr refresh
                image_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_4, 'tStopRefresh')  # time at next scr refresh
                image_4.setAutoDraw(False)
        
        # *image_5* updates
        if image_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            image_5.frameNStart = frameN  # exact frame index
            image_5.tStart = t  # local t and not account for scr refresh
            image_5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_5, 'tStartRefresh')  # time at next scr refresh
            image_5.setAutoDraw(True)
        if image_5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_5.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_5.tStop = t  # not accounting for scr refresh
                image_5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_5, 'tStopRefresh')  # time at next scr refresh
                image_5.setAutoDraw(False)
        
        # *image_6* updates
        if image_6.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            image_6.frameNStart = frameN  # exact frame index
            image_6.tStart = t  # local t and not account for scr refresh
            image_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
            image_6.setAutoDraw(True)
        if image_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_6.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_6.tStop = t  # not accounting for scr refresh
                image_6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_6, 'tStopRefresh')  # time at next scr refresh
                image_6.setAutoDraw(False)
        
        # *image_7* updates
        if image_7.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            image_7.frameNStart = frameN  # exact frame index
            image_7.tStart = t  # local t and not account for scr refresh
            image_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_7, 'tStartRefresh')  # time at next scr refresh
            image_7.setAutoDraw(True)
        if image_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_7.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_7.tStop = t  # not accounting for scr refresh
                image_7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_7, 'tStopRefresh')  # time at next scr refresh
                image_7.setAutoDraw(False)
        
        # *image_8* updates
        if image_8.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            image_8.frameNStart = frameN  # exact frame index
            image_8.tStart = t  # local t and not account for scr refresh
            image_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_8, 'tStartRefresh')  # time at next scr refresh
            image_8.setAutoDraw(True)
        if image_8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_8.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_8.tStop = t  # not accounting for scr refresh
                image_8.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_8, 'tStopRefresh')  # time at next scr refresh
                image_8.setAutoDraw(False)
        
        # *image_9* updates
        if image_9.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
            # keep track of start time/frame for later
            image_9.frameNStart = frameN  # exact frame index
            image_9.tStart = t  # local t and not account for scr refresh
            image_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_9, 'tStartRefresh')  # time at next scr refresh
            image_9.setAutoDraw(True)
        if image_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_9.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                image_9.tStop = t  # not accounting for scr refresh
                image_9.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image_9, 'tStopRefresh')  # time at next scr refresh
                image_9.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dist2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "dist2"-------
    for thisComponent in dist2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    dist_loop.addData('image_4.started', image_4.tStartRefresh)
    dist_loop.addData('image_4.stopped', image_4.tStopRefresh)
    dist_loop.addData('image_5.started', image_5.tStartRefresh)
    dist_loop.addData('image_5.stopped', image_5.tStopRefresh)
    dist_loop.addData('image_6.started', image_6.tStartRefresh)
    dist_loop.addData('image_6.stopped', image_6.tStopRefresh)
    dist_loop.addData('image_7.started', image_7.tStartRefresh)
    dist_loop.addData('image_7.stopped', image_7.tStopRefresh)
    dist_loop.addData('image_8.started', image_8.tStartRefresh)
    dist_loop.addData('image_8.stopped', image_8.tStopRefresh)
    dist_loop.addData('image_9.started', image_9.tStartRefresh)
    dist_loop.addData('image_9.stopped', image_9.tStopRefresh)
    
    # ------Prepare to start Routine "ret_dist_test"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_7
    mouse_7.clicked_name = []
    mouse_7.clicked_pos = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    ret_dist_testComponents = [polygon_outside5, polygon_inside5, mouse_7]
    for thisComponent in ret_dist_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ret_dist_testClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ret_dist_test"-------
    while continueRoutine:
        # get current time
        t = ret_dist_testClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ret_dist_testClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside5* updates
        if polygon_outside5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside5.frameNStart = frameN  # exact frame index
            polygon_outside5.tStart = t  # local t and not account for scr refresh
            polygon_outside5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside5, 'tStartRefresh')  # time at next scr refresh
            polygon_outside5.setAutoDraw(True)
        if polygon_outside5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside5.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside5.tStop = t  # not accounting for scr refresh
                polygon_outside5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside5, 'tStopRefresh')  # time at next scr refresh
                polygon_outside5.setAutoDraw(False)
        
        # *polygon_inside5* updates
        if polygon_inside5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside5.frameNStart = frameN  # exact frame index
            polygon_inside5.tStart = t  # local t and not account for scr refresh
            polygon_inside5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside5, 'tStartRefresh')  # time at next scr refresh
            polygon_inside5.setAutoDraw(True)
        if polygon_inside5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside5.tStartRefresh + 1.25-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside5.tStop = t  # not accounting for scr refresh
                polygon_inside5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside5, 'tStopRefresh')  # time at next scr refresh
                polygon_inside5.setAutoDraw(False)
        # *mouse_7* updates
        if mouse_7.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_7.frameNStart = frameN  # exact frame index
            mouse_7.tStart = t  # local t and not account for scr refresh
            mouse_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_7, 'tStartRefresh')  # time at next scr refresh
            mouse_7.status = STARTED
            mouse_7.mouseClock.reset()
            prevButtonState = mouse_7.getPressed()  # if button is down already this ISN'T a new click
        if mouse_7.status == STARTED:  # only update if started and not finished!
            buttons = mouse_7.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [polygon_outside5]:
                        if obj.contains(mouse_7):
                            gotValidClick = True
                            mouse_7.clicked_name.append(obj.name)
                            mouse_7.clicked_pos.append(obj.pos)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ret_dist_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ret_dist_test"-------
    for thisComponent in ret_dist_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    dist_loop.addData('polygon_outside5.started', polygon_outside5.tStartRefresh)
    dist_loop.addData('polygon_outside5.stopped', polygon_outside5.tStopRefresh)
    dist_loop.addData('polygon_inside5.started', polygon_inside5.tStartRefresh)
    dist_loop.addData('polygon_inside5.stopped', polygon_inside5.tStopRefresh)
    # store data for dist_loop (TrialHandler)
    x, y = mouse_7.getPos()
    buttons = mouse_7.getPressed()
    if sum(buttons):
        # check if the mouse was inside our 'clickable' objects
        gotValidClick = False
        for obj in [polygon_outside5]:
            if obj.contains(mouse_7):
                gotValidClick = True
                mouse_7.clicked_name.append(obj.name)
                mouse_7.clicked_pos.append(obj.pos)
    dist_loop.addData('mouse_7.x', x)
    dist_loop.addData('mouse_7.y', y)
    dist_loop.addData('mouse_7.leftButton', buttons[0])
    dist_loop.addData('mouse_7.midButton', buttons[1])
    dist_loop.addData('mouse_7.rightButton', buttons[2])
    if len(mouse_7.clicked_name):
        dist_loop.addData('mouse_7.clicked_name', mouse_7.clicked_name[0])
    if len(mouse_7.clicked_pos):
        dist_loop.addData('mouse_7.clicked_pos', mouse_7.clicked_pos[0])
    dist_loop.addData('mouse_7.started', mouse_7.tStart)
    dist_loop.addData('mouse_7.stopped', mouse_7.tStop)
    mouse_7.setPos(newPos=(0,0))
    # the Routine "ret_dist_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "feedback2"-------
    continueRoutine = True
    routineTimer.add(1.000000)
    # update component parameters for each repeat
    import math
    resp_degree = math.atan2(x,y)/math.pi*180
    actual_degree = math.atan2(object_location_x,object_location_y)/math.pi*180
    degree_difference = round((resp_degree - actual_degree))
    degree_difference = abs(degree_difference)
    #msg = str(x) + "\n" + str(y) + "\n" + str(resp_degree) + "\n" + str(actual_degree) + "\n" + str(degree_difference)
    if (degree_difference >180):
        degree_difference=round(360 - degree_difference)
    else:
        degree_difference=round(degree_difference)
    polygon_2.setPos((x, y))
    text_9.setText(degree_difference
)
    # keep track of which components have finished
    feedback2Components = [polygon_outside6, polygon_inside6, polygon_2, text_9, text_11]
    for thisComponent in feedback2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback2"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = feedback2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *polygon_outside6* updates
        if polygon_outside6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_outside6.frameNStart = frameN  # exact frame index
            polygon_outside6.tStart = t  # local t and not account for scr refresh
            polygon_outside6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_outside6, 'tStartRefresh')  # time at next scr refresh
            polygon_outside6.setAutoDraw(True)
        if polygon_outside6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_outside6.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_outside6.tStop = t  # not accounting for scr refresh
                polygon_outside6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_outside6, 'tStopRefresh')  # time at next scr refresh
                polygon_outside6.setAutoDraw(False)
        
        # *polygon_inside6* updates
        if polygon_inside6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_inside6.frameNStart = frameN  # exact frame index
            polygon_inside6.tStart = t  # local t and not account for scr refresh
            polygon_inside6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_inside6, 'tStartRefresh')  # time at next scr refresh
            polygon_inside6.setAutoDraw(True)
        if polygon_inside6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_inside6.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_inside6.tStop = t  # not accounting for scr refresh
                polygon_inside6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_inside6, 'tStopRefresh')  # time at next scr refresh
                polygon_inside6.setAutoDraw(False)
        
        # *polygon_2* updates
        if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2.frameNStart = frameN  # exact frame index
            polygon_2.tStart = t  # local t and not account for scr refresh
            polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
            polygon_2.setAutoDraw(True)
        if polygon_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > polygon_2.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                polygon_2.tStop = t  # not accounting for scr refresh
                polygon_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(polygon_2, 'tStopRefresh')  # time at next scr refresh
                polygon_2.setAutoDraw(False)
        
        # *text_9* updates
        if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            text_9.setAutoDraw(True)
        if text_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_9.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_9.tStop = t  # not accounting for scr refresh
                text_9.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_9, 'tStopRefresh')  # time at next scr refresh
                text_9.setAutoDraw(False)
        
        # *text_11* updates
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            text_11.setAutoDraw(True)
        if text_11.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_11.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                text_11.tStop = t  # not accounting for scr refresh
                text_11.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_11, 'tStopRefresh')  # time at next scr refresh
                text_11.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback2"-------
    for thisComponent in feedback2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    dist_loop.addData('polygon_outside6.started', polygon_outside6.tStartRefresh)
    dist_loop.addData('polygon_outside6.stopped', polygon_outside6.tStopRefresh)
    dist_loop.addData('polygon_inside6.started', polygon_inside6.tStartRefresh)
    dist_loop.addData('polygon_inside6.stopped', polygon_inside6.tStopRefresh)
    thisExp.addData('degree_difference', degree_difference)
    
    dist_loop.addData('polygon_2.started', polygon_2.tStartRefresh)
    dist_loop.addData('polygon_2.stopped', polygon_2.tStopRefresh)
    dist_loop.addData('text_9.started', text_9.tStartRefresh)
    dist_loop.addData('text_9.stopped', text_9.tStopRefresh)
    dist_loop.addData('text_11.started', text_11.tStartRefresh)
    dist_loop.addData('text_11.stopped', text_11.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'dist_loop'


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
