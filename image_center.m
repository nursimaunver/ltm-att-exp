% I = imread('sock3.png');
% [ny,nx] = size(I) ;
% RGB = insertMarker(I,[147 279]);
% imshow(RGB) ;
% hold on
% % Center 
% % C = round([nx ny]/2) ;
% % plot(C(1),C(2),'*r','MarkerSize',10) 
% 
% 
% im=imread('sock3.png');
% 
%  % Your figure
% imBin = imbinarize(im);
% imBin = imfill(imBin, 'holes');
% BW = regionprops(logical(imBin), 'centroid');
% imshow(imBin); 
% hold on; 
% plot(BW.Centroid(1),BW.Centroid(2),'bx')
disp(fullcolormatrix)