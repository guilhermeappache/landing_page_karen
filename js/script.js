
  function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }


  // document.addEventListener("DOMContentLoaded", function () {
                //     animate();
                // });

                // const totalIcons = 2;
                // const icons = [];

                // class Icon {
                //     constructor(id, enderecoIcone) {
                //         this.el = document.createElement("div");
                //         this.el.classList.add("icon");


                //         document.body.appendChild(this.el);
                //         this.el = document.createElement("img");
                //         this.el.src = enderecoIcone;
                //         this.el.classList.add("icone_unico");
                //         // this.el.style.backgroundColor = `hsl(19, 12%, 36%)`;

                //         document.body.appendChild(this.el);

                //         this.width = 40;
                //         this.height = 40;
                //         this.x = Math.random() * (window.innerWidth - this.width);
                //         this.y = Math.random() * (window.innerHeight - this.height);
                //         this.dx = (Math.random() * 0.06 + 0.0000010) * (Math.random() < 0.5 ? -1 : 1);
                //         this.dy = (Math.random() * 0.06 + 0.0000010) * (Math.random() < 0.5 ? -1 : 1);
                //     }

                //     move() {
                //         this.x += this.dx;
                //         this.y += this.dy;

                //         // Rebote horizontal
                //         if (this.x <= 0 || this.x + this.width >= window.innerWidth) {
                //             this.dx *= -1;
                //             this.x = Math.max(0, Math.min(this.x, window.innerWidth - this.width));
                //         }

                //         // Rebote vertical
                //         if (this.y <= 0 || this.y + this.height >= window.innerHeight) {
                //             this.dy *= -1;
                //             this.y = Math.max(0, Math.min(this.y, window.innerHeight - this.height));
                //         }

                //         this.el.style.left = `${this.x}px`;
                //         this.el.style.top = `${this.y}px`;
                //     }
                // }

                // // Cria ícones
                // for (let i = 0; i < totalIcons; i++) {
                //     icons.push(new Icon(i, 'assets/icones/tesoura.png'));
                //     icons.push(new Icon(i, 'assets/icones/navalha.png'));
                //     icons.push(new Icon(i, 'assets/icones/letreiro.png'));
                // }

                // function animate() {
                //     icons.forEach(icon => icon.move());
                //     requestAnimationFrame(animate);
                // }

                // animate();