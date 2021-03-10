% dir() komutu structlardan oluşan bir array verir.
% Struct içinde farklı fieldleri bulunduran bir data typetır.
% Bir structın fieldına erişmek için '.' operatorü kullanılır.
% Örnek:
% dirs = dir() 
% dirs(5) ==> dirs arrayindeki 5. eleman ve bir struct.
% dirs(5).name ==> 5. elemandaki dosyanın ismidir.

TARGET_COUNT = 80;
TRIAL_NUMBER_SOUND = 200;
TRIAL_NUMBER_DISTRACTOR = 200;
DISTRACTOR_SET = 6;
CIRCLE_CENTER = [0,0];
CIRCLE_RADIUS = 0.4;
CALCULATION = 15;

distractor_files = dir("./distractors/");
sound_files =  dir("./sounds/");
object_files =  dir("./objects/");
f_o={object_files.name};
f_s = {sound_files.name};
f_d = {distractor_files.name};
% 
%% Learning phase objects randomization
objects_array = [f_o].';
objects_array = objects_array(4:83);
objects_array= Shuffle(objects_array);
%% Target objects' location randomization
n=80;
r=0.4;
x0=0;
y0=0;
t=linspace(0,2*pi,n);
for dot = 1:n
    px = x0 + r.*cos(t);
    py = y0 + r.*sin(t);
end
plot(px, py);
axis square;
grid on;

%% Study phase object image order randomization
objects_array_study = [f_o].';
objects_array_study = objects_array_study(4:83);
objects_array_study= Shuffle(objects_array_study);
objects_array_study= repelem(objects_array_study,3);
objects_array_study= Shuffle(objects_array_study);
%% Filler task
nums1=randi(20,45,1);
nums1= num2str(nums1);
nums2=randi(20,45,1);
nums2= num2str(nums2);
ops=[ "+","-","x"].';
ops= Shuffle(repelem(ops,15));
for q= 1:20
    
    calc = [nums1 ops nums2];
    calc = join(calc);
    
end
%% Sounds order randomization
%first sound:
sounds_array = [f_s].';
sounds_array = sounds_array(3:52)
sounds_array= repelem(sounds_array,4)
sounds_array= Shuffle(sounds_array)
%second sound:
sounds_array2= Shuffle(sounds_array)
%% distractors order randomization
%dist1:
distractors_array1 = [f_d].';
distractors_array1= Shuffle(distractors_array1);
distractors_array1 = distractors_array1(3:202);
%dist2:
distractors_array2 = [f_d].';
distractors_array2= Shuffle(distractors_array2);
distractors_array2 = distractors_array2(3:202);
%dist3:
distractors_array3 = [f_d].';
distractors_array3= Shuffle(distractors_array3);
distractors_array3 = distractors_array3(3:202);
%dist4:
distractors_array4 = [f_d].';
distractors_array4 = Shuffle(distractors_array4);
distractors_array4 = distractors_array4(3:202);
%dist5:
distractors_array5 = [f_d].';
distractors_array5 = Shuffle(distractors_array5);
distractors_array5 = distractors_array5(3:202);
%dist6:
distractors_array6 = [f_d].';
distractors_array6= Shuffle(distractors_array6);
distractors_array6 = distractors_array6(3:202);

%% distractors positions
n_d=360;
r=0.4;
x0=0;
y0=0;
t=linspace(0,2*pi,n_d)
for dot = 1:n_d
dispx = x0 + r.*cos(t);
dispy = y0 + r.*sin(t);
end
disp_xy= [dispx;dispy].';
%distractor positions of 6
disp1= Shuffle(disp_xy(1:200, 1:2))
disp2= Shuffle(disp_xy(1:200, 1:2))
disp3= Shuffle(disp_xy(1:200, 1:2))
disp4= Shuffle(disp_xy(1:200, 1:2))
disp5= Shuffle(disp_xy(1:200, 1:2))
disp6= Shuffle(disp_xy(1:200, 1:2))
%% write excel
cell_arr = {}
cell_arr{:,1}= objects_array{:}
cell_arr{2}= sounds_array

writecell(cell_arr, "deneme.xlsx")






