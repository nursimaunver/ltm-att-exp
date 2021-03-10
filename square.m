% Clear the workspace and the screen
sca;
close all;
clearvars;
KbName('UnifyKeyNames');
% Here we call some default settings for setting up Psychtoolbox
PsychDefaultSetup(2);
Screen('Preference', 'SkipSyncTests', 1); % skip for testingse
% Get the screen numbers
screens = Screen('Screens');

% Draw to the external screen if avaliable
screenNumber = max(screens);

% Define black and white
white = WhiteIndex(screenNumber);
black = BlackIndex(screenNumber);

% Open an on screen window
[window, windowRect] = PsychImaging('OpenWindow', screenNumber, black);

% Get the size of the on screen window
[screenXpixels, screenYpixels] = Screen('WindowSize', window);

% Query the frame duration
ifi = Screen('GetFlipInterval', window);

% Get the centre coordinate of the window
[xCenter, yCenter] = RectCenter(windowRect);

% Make a base Rect of 200 by 200 pixels
baseRect = [0 0 50 50];

% Set the color of the rect to red
rectColor = [rand rand rand];

% Our square will oscilate with a sine wave function to the left and right
% of the screen. These are the parameters for the sine wave
% See: http://en.wikipedia.org/wiki/Sine_wave
amplitude = screenXpixels * 0.25;
frequency = 0.2;
angFreq = 2 * pi * frequency;
startPhase = 0;
time = 0;

% Sync us and get a time stamp
vbl = Screen('Flip', window);
waitframes = 1;

% Maximum priority level
topPriorityLevel = MaxPriority(window);
Priority(topPriorityLevel);
% we want our square to oscillate around
squareXpos = xCenter + 1;
squareYpos = yCenter +1;
directionmode = 1
% Loop the animation until a key is pressed
t=0
while ~KbCheck
    
    rectColor = [rand rand rand];
    R =100;
    % Position of the square on this frame
    xpos = amplitude * sin(angFreq * time + startPhase);
  
    % Add this position to the screen center coordinate. This is the point
    % we want our square to oscillate around
    t = t+0.1;
 
  squareXpos = xCenter %+ R*cos(t);
  squareYpos = yCenter + R*sin(t);

  
  %if squareXpos > screenXpixels || squareYpos > screenYpixels 
%         
%         squareXpos = 0;
%         squareYpos = 0;
%       
%     else
%         squareXpos = squareXpos + 3;
%         squareYpos = squareYpos +3;
%       
%     end
        
    % Center the rectangle on the centre of the screen
    centeredRect = CenterRectOnPointd(baseRect, squareXpos, squareYpos);

    % Draw the rect to the screen
    Screen('FillRect', window, rectColor, centeredRect);

    % Flip to the screen
    vbl  = Screen('Flip', window, vbl + (waitframes - 0.5) * ifi);

    % Increment the time
    time = time + ifi;

end

% Clear the screen
sca;