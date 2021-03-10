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
f_o = {object_files.name};
f_s = {sound_files.name};
f_d = {distractor_files.name};
%
%% Learning phase objects randomization
objects_array = [f_o].';
objects_array = objects_array(4:83);
n= size(objects_array,1);
ixs=randperm(n);
objects_array = objects_array(ixs);
%% Target objects' location randomization
n = 80;
r = 0.4;
x0 = 0;
y0 = 0;
t = linspace(0,2*pi,n);
for dot = 1:n
    px = x0 + r.*cos(t);
    py = y0 + r.*sin(t);
end
plot(px, py);
axis square;
grid on;

%% Study phase object image order randomization
% %objects_array_study = [f_o].';
% %objects_array_study = objects_array_study(4:83);
% objects_array_study = Shuffle(objects_array_study);
% objects_array_study = repelem(objects_array_study,3);
% objects_array_study = Shuffle(objects_array_study);
new_ixs = repelem(ixs,3);
objects_array_study= objects_array(new_ixs);
m=size(objects_array_study,1);
ixs_=randperm(m);

new_new_ixs=new_ixs(ixs_);

objects_array_study = objects_array_study(ixs_); 
new_px= px(new_new_ixs);
new_py= py(new_new_ixs);

%% Filler task
nums1 = randi(20,45,1);
nums1 = num2str(nums1);
nums2 = randi(20,45,1);
nums2 = num2str(nums2);
ops = [ "+","-","x"].';
ops = Shuffle(repelem(ops,15));
for q = 1:20
    
    calc = [nums1 ops nums2];
    calc = join(calc);
    
end
%% Sounds order randomization
%first sound:
sounds_array = [f_s].';
sounds_array = sounds_array(3:52);
sounds_array = repelem(sounds_array,4);
sounds_array = Shuffle(sounds_array);
%second sound:
sounds_array2 = Shuffle(sounds_array);
%% distractors order randomization
%dist1:
distractors_array1 = [f_d].';
distractors_array1 = Shuffle(distractors_array1);
distractors_array1 = distractors_array1(3:202);
%dist2:
distractors_array2 = [f_d].';
distractors_array2 = Shuffle(distractors_array2);
distractors_array2 = distractors_array2(3:202);
%dist3:
distractors_array3 = [f_d].';
distractors_array3 = Shuffle(distractors_array3);
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
distractors_array6 = Shuffle(distractors_array6);
distractors_array6 = distractors_array6(3:202);

%% distractors positions
n_d = 360;
r = 0.4;
x0 = 0;
y0 = 0;
t = linspace(0, 2*pi, n_d);
for dot = 1:n_d
    dispx = x0 + r.*cos(t);
    dispy = y0 + r.*sin(t);
end
disp_xy = [dispx;dispy].';
%distractor positions of 6
disp1 = Shuffle(disp_xy(1:200, 1:2));
disp2 = Shuffle(disp_xy(1:200, 1:2));
disp3 = Shuffle(disp_xy(1:200, 1:2));
disp4 = Shuffle(disp_xy(1:200, 1:2));
disp5 = Shuffle(disp_xy(1:200, 1:2));
disp6 = Shuffle(disp_xy(1:200, 1:2));
%% write excel
% These are the names that will appeared as the header of .xlsx file, which
% means they are the first row of the .xlsx file
column_names = ["objects","study_objects","sounds1","sounds2","object_location_x","object_location_y","study_location_x", "study_location_y","calc","dist1","dist2","dist3","dist4",...
    "dist5","dist6","dist1_location_x","dist2_location_x","dist3_location_x","dist4_location_x","dist5_location_x",...
    "dist6_location_x","dist1_location_y","dist2_location_y","dist3_location_y","dist4_location_y","dist5_location_y",...
    "dist6_location_y"];

% These are the variables that we will write as a data to .xlsx file. Each
% variable will constitute a column. They will have not necessarily the
% same size.
variables = {objects_array, objects_array_study, sounds_array, sounds_array2, px, py, new_px, new_py, calc, distractors_array1, distractors_array2,...
    distractors_array3, distractors_array4, distractors_array5, distractors_array6, disp1(:, 1), disp2(:, 1), disp3(:, 1),...
    disp4(:, 1), disp5(:, 1), disp6(:, 1), disp1(:, 2), disp2(:, 2), disp3(:, 2), disp4(:, 2), disp5(:, 2), disp6(:, 2)};

% Empty cell array initialization
cell_arr = cell(200, 25);

n = length(column_names); % It might be also the "variables".
% Now, the each column name and the variable that we will put that column
% will be iterated.
for k = 1:n
    
    % If the variable that we put on that column has the shape like 1x80 or
    % 1x200, which means a row vector, we are transposing it to make it
    % column vector. Because, we are putting them column-by-column.
    if size(variables{k}, 1) < size(variables{k}, 2)
        
        % The funny fact is that when we are reaching an element from the cell,
        % we need to use curly bracket, like in the right hand side.
        % But, when we assign a cell element, we need to use normal
        % bracket, like in the left hand side. 
        variables(k) = {variables{k}'};
    end
    
    
    % Temporary column variable
    % The first element of each column is the  column name, and the rest of
    % the elements are the required column data
    temp_col = {};
    temp_col = num2cell([column_names(k); variables{k}]);
    cell_arr(1:size(temp_col, 1), k) = temp_col;
  
end


strcat('objects/', cell_arr{1})

writecell(cell_arr, "deneme2.xlsx")

