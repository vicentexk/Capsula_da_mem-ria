body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #fff7cc, #ffe066);
  text-align: center;
  padding: 30px;
  color: #5a4a00;
}

h1 {
  margin-bottom: 5px;
}

.sub {
  margin-bottom: 30px;
  opacity: 0.8;
}

.secao {
  margin-bottom: 30px;
}

.botao {
  display: block;
  margin: 10px auto;
  padding: 15px;
  width: 260px;
  background: #ffd43b;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;
}

.botao:hover {
  background: #fab005;
  transform: scale(1.05);
}

/* POPUP */

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: none;
  justify-content: center;
  align-items: center;
}

.popup {
  background: white;
  padding: 25px;
  border-radius: 15px;
  max-width: 400px;
  width: 90%;
  position: relative;
  transform: scale(0.8);
  animation: aparecer 0.3s ease forwards;
}

.fechar {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  font-size: 18px;
}

/* ANIMAÇÕES */

@keyframes aparecer {
  from { 
    opacity: 0; 
    transform: scale(0.8);
  }
  to { 
    opacity: 1; 
    transform: scale(1);
  }
}

@keyframes cair {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
