const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criar um cliente de socket
const client = net.createConnection({
    host: 'localhost',
    port: 3001
});

// Lidar com mensagens do servidor
client.on('data', (mensagem) => {
    console.log('Mensagem recebida do servidor:', mensagem.toString('utf8'));
});

// Lidar com a desconexão do servidor
client.on('close', () => {
    console.log('Conexão fechada');
});

// Configurar leitura de entrada do usuário
rl.on('line', (input) => {
    // Enviar mensagem para o servidor
    client.write(input + '\r\n');
});

// Enviar uma mensagem para o servidor
client.write('Olá, servidor!\r\n', () => {
    // client.end();
});
