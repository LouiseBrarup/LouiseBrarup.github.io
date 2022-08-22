let tl = gsap.timeline({repeat: -1});

tl.from('.cirkel', {duration: 2, height: 2000, width: 2000});
tl.to('.dot1', {duration: 1, ease: 'elastic.out(1, 0.4)', x: 200});
tl.to('.dot2', {duration: 1, ease: 'elastic.out(1, 0.4)', x: -200}, '<');
tl.to('.dot3', {duration: 1, ease: 'elastic.out(1, 0.4)', y: 200}, '<');
tl.to('.dot4', {duration: 1, ease: 'elastic.out(1, 0.4)', y: -200}, '<');
tl.to('.dot5', {duration: 1, ease: 'elastic.out(1, 0.4)', y: -140, x: 140}, '<');
tl.to('.dot6', {duration: 1, ease: 'elastic.out(1, 0.4)', y: 140, x: -140}, '<');
tl.to('.dot7', {duration: 1, ease: 'elastic.out(1, 0.4)', y: 140, x: 140}, '<');
tl.to('.dot8', {duration: 1, ease: 'elastic.out(1, 0.4)', y: -140, x: -140}, '<');

tl.to('.dot1', {duration: .7, x: 140, y: -140});
tl.to('.dot2', {duration: .7, x: -140, y: 140}, '<');
tl.to('.dot3', {duration: .7, x: 140, y: 140}, '<');
tl.to('.dot4', {duration: .7, x: -140, y: -140}, '<');
tl.to('.dot5', {duration: .7, y: 0, x: 200});
tl.to('.dot6', {duration: .7, y: 0, x: -200}, '<');
tl.to('.dot7', {duration: .7, x: 0, y: 200}, '<');
tl.to('.dot8', {duration: .7, x: 0, y: -200}, '<');

tl.to('.dot1', {duration: .7, y:-200, x: 0});
tl.to('.dot2', {duration: .7, y:200, x: 0}, '<');
tl.to('.dot3', {duration: .7, y:0, x: 200}, '<');
tl.to('.dot4', {duration: .7, y:0, x: -200}, '<');
tl.to('.dot5', {duration: .7, x: 140, y: 140});
tl.to('.dot6', {duration: .7, x: -140, y: -140}, '<');
tl.to('.dot7', {duration: .7, x: -140, y: 140}, '<');
tl.to('.dot8', {duration: .7, x: 140, y: -140}, '<');

tl.to('.dot1', {duration: 1, x: 0, y: 0});
tl.to('.dot2', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot3', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot4', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot5', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot6', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot7', {duration: 1, x: 0, y: 0}, '<');
tl.to('.dot8', {duration: 1, x: 0, y: 0}, '<');

tl.to('.cirkel', {duration: 3, height: 2000, width: 2000});
tl.to('.cirkel', {duration: 1, borderRadius: 0}, '-=.8');


