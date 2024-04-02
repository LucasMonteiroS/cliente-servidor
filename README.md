# Comunicação cliente-servidor

Esse projeto visa ensinar e demonstrar de forma simplificada uma comunicação entre cliente e servidor
Para executar ambos os arquivos é necessário usar o comando Node, lembrando que sempre iniciar o servidor para ter uma porta disponível para se comunicar:
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/db6f52c4-311d-4d56-8f1b-7519a2c5d7de)
Depois:
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/4db8c1bf-001e-44d6-a0ac-d1f696edf6e7)

Nesse projeto foi adicionado a biblioteca ReadLine, que visa proporcionar uma comunicação através de prompts entre o cliente e o servidor:
<pre/>
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/52d8df96-75cf-46a9-9a38-ed98a5be3518)
Construindo a interface de entrada e saída:
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/79d2ee16-94c8-402b-85c7-0c598c8c5e90)
Mantendo a comunicação constante para que se possa estar enviando várias mensagens ao servidor:
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/054880e5-0050-4331-a19a-f2ac5fc59062)
Agora no lado do servidor, precisamos ler essa mensagem e ser possível devolver uma resposta.
Para isso vamos construir uma função que devolva essa mensagem com ajuda do socket:
![image](https://github.com/LucasMonteiroS/cliente-servidor/assets/54117063/144574b7-0e43-477a-8bdb-d7af9236608e)






