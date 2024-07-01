Para rodar o projeto é necessário seguir os passos abaixo:  
1 - criar um arquivo dotenv com as seguintes variaveis:  
        DATABASE_URL="mysql://root:senha@localhost:3306/pocket_calendar"
        NEXTAUTH_SECRET="dnjwpfvih43ei02=-r23r=fjrigj39ghdfubvnlewrhfh23hrufhwe94r44334;sdf/sd"
        NEXTAUTH_URL="http://localhost:3000/"
        SYNCFUSION_KEY="Ngo9BigBOggjHTQxAR8/V1NCaF5cXmpCeUx0THxbf1x0ZFBMYF9bQH5PIiBoS35RckVlW3Zfd3ZQRmhUVER+"

    No "DATABASE_URL" é necessário configurar seu usuário e senha MYSQL para poder realizar a conexão, por padrão deixei o root e depois do ":" colocar a senha   
    definida no seu banco de dados

2 - rodar o npm i na raiz do projeto  

3 - rodar o comando "npx prisma db push"   
    esse comando cria o banco de dados no MYSQL  

OBS: Caso seu banco de dados favorito não for o MYSQL deixarei algumas opções de drivers de bancos mais utilizados e pode ser que você ache o seu, caso não encontrar verificar na documentação do prisma(https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch):  

DATABASE_URL=postgresql://test:test@localhost:5432/test
DATABASE_URL="sqlserver://localhost:1433;database=mydb;user=sa;password=r@ndomP@$$w0rd;trustServerCertificate=true"
DATABASE_URL="mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase"

    