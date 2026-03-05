
// --- CONFIGURACIÓN ---
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        
        // UI
        const startScreen = document.getElementById('start-screen');
        const gameOverScreen = document.getElementById('game-over-screen');
        const scoreHud = document.getElementById('score-hud');
        const startBtn = document.getElementById('start-btn');
        const restartBtn = document.getElementById('restart-btn');
        const finalScoreEl = document.getElementById('final-score');
        const highScoreEl = document.getElementById('high-score');

        // Estado
        let gameState = 'MENU';
        let score = 0;
        let highScore = localStorage.getItem('infiniteFallHighScore') || 0;
        let speed = 6; 
        let frameCount = 0;
        let lastTime = 0;
        
        let wallThickness = 0; 
        let maxWallThickness = 0;

        // --- SISTEMA DE GRÁFICOS ---
        
        // Jugador
        const player = {
            x: 0,
            y: 0,
            radius: 20, 
            width: 40,
            height: 60,
            vx: 0,
            speed: 8,
            tiltX: 0,
            scarfPoints: [] // Para animación de la bufanda
        };

        // Generar vértices para rocas irregulares
        function generateRockVertices(radius) {
            const points = [];
            const numPoints = 7;
            for(let i=0; i<numPoints; i++) {
                const angle = (i / numPoints) * Math.PI * 2;
                const r = radius * (0.7 + Math.random() * 0.6); // Variación de radio
                points.push({
                    x: Math.cos(angle) * r,
                    y: Math.sin(angle) * r
                });
            }
            return points;
        }

        let obstacles = [];
        
        // Tabla de Spawn
        const spawnTable = [
            { id: 'small_rock', type: 'rock', minW: 40, maxW: 60, weight: 3, color: '#94a3b8' },
            { id: 'big_rock', type: 'rock', minW: 80, maxW: 120, weight: 2, color: '#64748b' },
            { id: 'log', type: 'log', minW: 100, maxW: 160, weight: 2 },
            { id: 'bird', type: 'bird', minW: 40, maxW: 50, weight: 2, speedVar: 3, color: '#38bdf8' }, // Pájaro azul
            { id: 'eagle', type: 'bird', minW: 90, maxW: 120, weight: 1, speedVar: 5, color: '#fbbf24' }, // Águila dorada
            { id: 'root_left', type: 'root_left', minW: 80, maxW: 180, weight: 1.5 },
            { id: 'root_right', type: 'root_right', minW: 80, maxW: 180, weight: 1.5 }
        ];

        let particles = []; // Estrellas/velocidad

        // --- DIBUJADO DE ENTIDADES ---

        function drawPlayer(ctx, x, y, tilt) {
            ctx.save();
            ctx.translate(x, y);
            
            // Inclinación visual basada en movimiento
            const rotateAngle = (tilt || 0) * 0.02; // Suave rotación
            ctx.rotate(rotateAngle);

            // 1. Bufanda (Física simple simulada)
            // Añadir punto actual a la estela
            player.scarfPoints.unshift({x: x, y: y - 20});
            if (player.scarfPoints.length > 10) player.scarfPoints.pop();

            ctx.beginPath();
            ctx.moveTo(0, -15); // Empezar en el cuello
            
            // Dibujar curva a través de los puntos de la historia (ajustados a coordenadas locales)
            // Esto es un truco: dibujamos la bufanda en coordenadas globales pero dentro del save/restore
            ctx.restore(); // Salimos temporalmente para dibujar bufanda en mundo real
            
            ctx.save(); // Volvemos a guardar para el estilo
            ctx.beginPath();
            if (player.scarfPoints.length > 0) {
                ctx.moveTo(player.scarfPoints[0].x, player.scarfPoints[0].y);
                for (let i = 1; i < player.scarfPoints.length; i++) {
                    const p = player.scarfPoints[i];
                    // El viento empuja la bufanda hacia arriba (y negativo) y oscila
                    const windX = Math.sin(frameCount * 0.5 + i) * 5;
                    ctx.lineTo(p.x + windX, p.y - (i * 15)); 
                }
            }
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#ef4444'; // Bufanda roja
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            ctx.restore();

            // Volvemos al contexto del jugador
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotateAngle);

            // 2. Cuerpo (Cápsula cayendo)
            ctx.fillStyle = '#f8fafc'; // Traje blanco
            
            // Cuerpo
            ctx.beginPath();
            ctx.ellipse(0, 0, 15, 25, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cabeza
            ctx.beginPath();
            ctx.arc(0, 10, 12, 0, Math.PI * 2); // Cabeza abajo (cayendo)
            ctx.fill();

            // Gafas
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(-8, 8, 16, 6);

            // Mochila
            ctx.fillStyle = '#64748b';
            ctx.fillRect(-10, -15, 20, 15);

            // Brazos (aleteando por pánico/aerodinámica)
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            
            const armAngle = Math.sin(frameCount * 0.2) * 0.3;
            
            // Brazo Izquierdo
            ctx.beginPath();
            ctx.moveTo(-10, -5);
            ctx.lineTo(-25, -15 + armAngle * 10);
            ctx.stroke();

            // Brazo Derecho
            ctx.beginPath();
            ctx.moveTo(10, -5);
            ctx.lineTo(25, -15 - armAngle * 10);
            ctx.stroke();

            ctx.restore();
        }

        function drawRock(ctx, obs) {
            ctx.save();
            ctx.translate(obs.x + obs.width/2, obs.y + obs.height/2);
            // Rotación lenta constante
            ctx.rotate(frameCount * 0.02 + obs.seed); 
            
            ctx.fillStyle = obs.color || '#94a3b8';
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 3;

            ctx.beginPath();
            if (obs.vertices) {
                ctx.moveTo(obs.vertices[0].x, obs.vertices[0].y);
                for(let i=1; i<obs.vertices.length; i++) {
                    ctx.lineTo(obs.vertices[i].x, obs.vertices[i].y);
                }
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Detalle de sombra/cráter
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.beginPath();
            ctx.arc(0, 0, obs.width * 0.2, 0, Math.PI*2);
            ctx.fill();

            ctx.restore();
        }

        function drawBird(ctx, obs) {
            ctx.save();
            ctx.translate(obs.x + obs.width/2, obs.y + obs.height/2);
            // Orientar según dirección
            if (obs.speedX > 0) ctx.scale(-1, 1); 

            // Color
            ctx.fillStyle = obs.color || '#38bdf8';

            // Animación de alas
            const wingY = Math.sin(frameCount * 0.3) * (obs.height * 0.4);
            
            // Cuerpo
            ctx.beginPath();
            ctx.ellipse(0, 0, obs.width * 0.3, obs.height * 0.2, 0, 0, Math.PI*2);
            ctx.fill();

            // Ala Izquierda
            ctx.beginPath();
            ctx.moveTo(-5, 0);
            ctx.lineTo(-obs.width/2, -wingY); // Punta ala
            ctx.lineTo(-10, 5);
            ctx.fill();

            // Ala Derecha
            ctx.beginPath();
            ctx.moveTo(5, 0);
            ctx.lineTo(obs.width/2, -wingY); // Punta ala
            ctx.lineTo(10, 5);
            ctx.fill();

            // Cabeza/Pico
            ctx.fillStyle = '#fbbf24'; // Pico amarillo
            ctx.beginPath();
            ctx.moveTo(-obs.width * 0.3, -5);
            ctx.lineTo(-obs.width * 0.5, 0);
            ctx.lineTo(-obs.width * 0.3, 5);
            ctx.fill();

            ctx.restore();
        }

        function drawLog(ctx, obs) {
            ctx.save();
            ctx.translate(obs.x + obs.width/2, obs.y + obs.height/2);
            
            ctx.fillStyle = '#78350f'; // Marrón oscuro
            
            // Tronco principal
            ctx.beginPath();
            ctx.roundRect(-obs.width/2, -obs.height/2, obs.width, obs.height, 5);
            ctx.fill();

            // Detalles de corteza
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            for(let i=0; i<3; i++) {
                let offset = (i - 1) * (obs.width * 0.25);
                ctx.fillRect(offset, -obs.height/2, 2, obs.height);
            }
            
            // Hoja pequeña decorativa
            ctx.fillStyle = '#4ade80';
            ctx.beginPath();
            ctx.arc(0, -obs.height/2, 5, 0, Math.PI*2);
            ctx.fill();

            ctx.restore();
        }

        function drawRoot(ctx, obs) {
            // Raíces saliendo de las paredes
            ctx.save();
            
            ctx.translate(obs.x, obs.y);
            
            if (obs.type === 'root_right') {
                ctx.translate(obs.width, 0);
                ctx.scale(-1, 1);
            }

            // Dibujar una raíz "pincho"
            ctx.fillStyle = '#57534e'; // Color piedra/tierra oscuro
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(obs.width, obs.height/2);
            ctx.lineTo(0, obs.height);
            ctx.fill();

            // Detalles
            ctx.strokeStyle = '#44403c';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, obs.height * 0.3);
            ctx.lineTo(obs.width * 0.7, obs.height * 0.5);
            ctx.stroke();

            ctx.restore();
        }

        // --- SISTEMA PRINCIPAL ---

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            maxWallThickness = canvas.width * 0.35;
            
            if (gameState === 'MENU') {
                player.x = canvas.width / 2;
                player.y = canvas.height * 0.3;
            }
        }
        window.addEventListener('resize', resize);
        resize();

        // Inputs
        const keys = { ArrowLeft: false, ArrowRight: false };
        let touchX = null;
        let useGyro = false;

        window.addEventListener('keydown', e => { if(keys.hasOwnProperty(e.code)) keys[e.code] = true; });
        window.addEventListener('keyup', e => { if(keys.hasOwnProperty(e.code)) keys[e.code] = false; });

        window.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, {passive: false});
        window.addEventListener('touchmove', e => {
            e.preventDefault();
            if (gameState !== 'PLAYING') return;
            const currentX = e.touches[0].clientX;
            const diff = currentX - touchX;
            player.x += diff * 1.5;
            touchX = currentX;
            clampPlayer();
        }, {passive: false});

        function handleOrientation(event) {
            if (!useGyro) return;
            let tilt = event.gamma; 
            if (Math.abs(tilt) < 3) tilt = 0;
            if (tilt > 45) tilt = 45;
            if (tilt < -45) tilt = -45;
            player.tiltX = tilt;
        }

        async function requestGyroPermission() {
            if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                try {
                    const permissionState = await DeviceOrientationEvent.requestPermission();
                    if (permissionState === 'granted') {
                        useGyro = true;
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                } catch (error) { console.error(error); }
            } else if ('DeviceOrientationEvent' in window) {
                useGyro = true;
                window.addEventListener('deviceorientation', handleOrientation);
            }
        }

        function clampPlayer() {
            const minX = wallThickness + player.radius;
            const maxX = canvas.width - wallThickness - player.radius;
            if (player.x < minX) player.x = minX;
            if (player.x > maxX) player.x = maxX;
        }

        // Generación
        function spawnObstacle() {
            const totalWeight = spawnTable.reduce((sum, item) => sum + item.weight, 0);
            let random = Math.random() * totalWeight;
            let type = spawnTable[0];
            for (let t of spawnTable) {
                random -= t.weight;
                if (random <= 0) { type = t; break; }
            }

            const width = type.minW + Math.random() * (type.maxW - type.minW);
            const height = (type.type === 'rock' || type.type === 'bird') ? width : width * 0.4;

            const tunnelLeft = wallThickness;
            const tunnelRight = canvas.width - wallThickness;
            const tunnelWidth = tunnelRight - tunnelLeft;

            let x, speedX = 0;
            let vertices = null;

            if (type.type === 'root_left') {
                x = tunnelLeft - (width * 0.1); 
            } else if (type.type === 'root_right') {
                x = tunnelRight - (width * 0.9); 
            } else {
                if (tunnelWidth < width) return;
                const minSpawnX = tunnelLeft;
                const maxSpawnX = tunnelRight - width;
                x = minSpawnX + Math.random() * (maxSpawnX - minSpawnX);

                if (type.type === 'bird') {
                    speedX = (Math.random() < 0.5 ? -1 : 1) * type.speedVar;
                }
                if (type.type === 'rock') {
                    vertices = generateRockVertices(width/2);
                }
            }
            
            obstacles.push({
                x: x,
                y: canvas.height + 100,
                width: width,
                height: height,
                type: type.type,
                color: type.color,
                speedX: speedX,
                vertices: vertices,
                seed: Math.random() * 100, // Para variación visual
                hitboxScale: 0.7
            });
        }

        function createParticles() {
            if (particles.length < 50) {
                const tunnelLeft = wallThickness;
                const tunnelRight = canvas.width - wallThickness;
                let px = Math.random() * canvas.width;
                if (px < tunnelLeft) px = tunnelLeft + Math.random() * 20;
                if (px > tunnelRight) px = tunnelRight - Math.random() * 20;

                particles.push({
                    x: px,
                    y: canvas.height + Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    alpha: Math.random() * 0.5 + 0.1
                });
            }
        }

        function update(deltaTime) {
            if (gameState !== 'PLAYING') return;

            frameCount++;
            score += (speed / 10);
            
            // Dificultad
            if (frameCount % 300 === 0) speed = Math.min(speed + 0.5, 20); 
            const difficultyProgress = Math.min(score / 5000, 1);
            wallThickness = maxWallThickness * difficultyProgress;

            // Player
            if (keys.ArrowLeft) player.x -= player.speed;
            if (keys.ArrowRight) player.x += player.speed;
            if (useGyro) player.x += (player.tiltX * 0.6);
            clampPlayer();

            // Obstacles
            const spawnRate = Math.max(15, 90 - Math.floor(speed * 3));
            if (frameCount % spawnRate === 0) spawnObstacle();

            for (let i = obstacles.length - 1; i >= 0; i--) {
                let obs = obstacles[i];
                obs.y -= speed;
                obs.x += obs.speedX;

                const tunnelLeft = wallThickness;
                const tunnelRight = canvas.width - wallThickness;

                if (obs.type === 'bird') {
                    if (obs.x < tunnelLeft && obs.speedX < 0) obs.speedX *= -1;
                    if (obs.x + obs.width > tunnelRight && obs.speedX > 0) obs.speedX *= -1;
                }

                // Colisión Circular
                const pCX = player.x;
                const pCY = player.y;
                const oCX = obs.x + obs.width / 2;
                const oCY = obs.y + obs.height / 2;
                const pR = player.radius * 0.8; 
                const oR = (obs.width / 2) * obs.hitboxScale;

                if (Math.hypot(pCX - oCX, pCY - oCY) < pR + oR) {
                    gameOver();
                }

                if (obs.y < -200) obstacles.splice(i, 1);
            }

            // Particles
            createParticles();
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].y -= speed * 1.5;
                if (particles[i].y < -10) particles.splice(i, 1);
            }

            scoreHud.innerText = `${Math.floor(score)}m`;
        }

        function draw() {
            // Fondo
            const grad = ctx.createLinearGradient(0,0,0, canvas.height);
            grad.addColorStop(0, '#0f172a'); // Azul muy oscuro arriba
            grad.addColorStop(1, '#1e293b'); // Un poco más claro abajo
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Partículas (Estrellas / Velocidad)
            particles.forEach(p => {
                if (p.x > wallThickness && p.x < canvas.width - wallThickness) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Player
            // Añadir un poco de shake basado en velocidad
            let shakeX = (speed > 10) ? (Math.random() - 0.5) * (speed/3) : 0;
            let tilt = 0;
            if (keys.ArrowLeft || (useGyro && player.tiltX < -5)) tilt = -15;
            else if (keys.ArrowRight || (useGyro && player.tiltX > 5)) tilt = 15;
            
            drawPlayer(ctx, player.x + shakeX, player.y, tilt);

            // Obstáculos
            obstacles.forEach(obs => {
                if (obs.type === 'rock') drawRock(ctx, obs);
                else if (obs.type === 'bird') drawBird(ctx, obs);
                else if (obs.type === 'log') drawLog(ctx, obs);
                else if (obs.type === 'root_left' || obs.type === 'root_right') drawRoot(ctx, obs);
            });

            // PAREDES (Terreno irregular)
            ctx.fillStyle = '#1e1e24'; 
            
            // Pared Izquierda
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for(let y=0; y<=canvas.height + 50; y+=40) {
                // Ruido procedural simple usando sin/cos y frameCount para que parezca que la pared "pasa" hacia arriba
                let noise = Math.sin((y + score * 10) * 0.01) * 10 + Math.cos((y + score * 5) * 0.03) * 10;
                ctx.lineTo(wallThickness + noise, y);
            }
            ctx.lineTo(0, canvas.height);
            ctx.fill();

            // Sombra interna izquierda
            const lGrad = ctx.createLinearGradient(wallThickness, 0, wallThickness + 40, 0);
            lGrad.addColorStop(0, 'rgba(0,0,0,0.8)');
            lGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = lGrad;
            ctx.fillRect(0, 0, wallThickness + 40, canvas.height);

            // Pared Derecha
            ctx.fillStyle = '#1e1e24';
            ctx.beginPath();
            ctx.moveTo(canvas.width, 0);
            for(let y=0; y<=canvas.height + 50; y+=40) {
                let noise = Math.sin((y + score * 10) * 0.01 + Math.PI) * 10 + Math.cos((y + score * 5) * 0.03) * 10;
                ctx.lineTo(canvas.width - wallThickness - noise, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.fill();

            // Sombra interna derecha
            const rGrad = ctx.createLinearGradient(canvas.width - wallThickness - 40, 0, canvas.width - wallThickness, 0);
            rGrad.addColorStop(0, 'rgba(0,0,0,0)');
            rGrad.addColorStop(1, 'rgba(0,0,0,0.8)');
            ctx.fillStyle = rGrad;
            ctx.fillRect(canvas.width - wallThickness - 40, 0, 50, canvas.height);
        }

        function loop(timestamp) {
            const deltaTime = timestamp - lastTime;
            lastTime = timestamp;
            update(deltaTime);
            draw();
            requestAnimationFrame(loop);
        }

        // --- FUNCIONES DE ESTADO ---

        function startGame() {
            requestGyroPermission();
            gameState = 'PLAYING';
            score = 0;
            speed = 6;
            frameCount = 0;
            obstacles = [];
            particles = [];
            player.scarfPoints = [];
            wallThickness = 0; 
            
            startScreen.classList.add('hidden');
            gameOverScreen.classList.add('hidden');
            scoreHud.style.display = 'block';
            player.x = canvas.width / 2;
        }

        function gameOver() {
            gameState = 'GAMEOVER';
            if (score > highScore) {
                highScore = Math.floor(score);
                localStorage.setItem('infiniteFallHighScore', highScore);
            }
            finalScoreEl.innerText = `${Math.floor(score)}m`;
            highScoreEl.innerText = `Récord Personal: ${highScore}m`;
            scoreHud.style.display = 'none';
            gameOverScreen.classList.remove('hidden');
        }

        startBtn.addEventListener('click', startGame);
        restartBtn.addEventListener('click', startGame);
        requestAnimationFrame(loop);
