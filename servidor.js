const net = require('net');
const readline = require('readline');

// Configurar leitura de entrada do servidor
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const porta = 3001;

// Criar um servidor de socket
const server = net.createServer((socket) => {
    console.log('Cliente conectado');
  
    // Enviar uma mensagem para o cliente
    socket.write(`Requisição de ${socket.remoteAddress} na porta ${socket.remotePort}\n`);

    // Lidar com mensagens do cliente
    socket.on('data', (mensagem) => {
        console.log('Mensagem recebida do cliente:', mensagem.toString('utf8'));
        // Enviar uma resposta de volta ao cliente
        enviarResposta(socket);
    });

    // Lidar com a desconexão do cliente
    socket.on('close', () => {
        console.log('Conexão fechada');
    });
});

// Começar a escutar por novas conexões
server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});

// Função para enviar resposta do servidor
function enviarResposta(socket) {
    rl.question('Digite a resposta para o cliente: ', (resposta) => {
        socket.write(`${resposta}\n`);
    });
}
