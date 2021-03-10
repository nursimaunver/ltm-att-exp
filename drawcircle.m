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
xlim([0 2]);
ylim([0 2]);
grid on;