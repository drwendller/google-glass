function mudaFoto(foto)
        {
            var oculos = false;
            if(!oculos)
            {
               document.getElementById("icone").src = "curso-html5-pacote01/projeto-glass-html5/_imagens/" + foto + ".png";
               if(foto == 'glass-oculos-preto-peq')
                {
                    oculos = true;
                }
            }
        }