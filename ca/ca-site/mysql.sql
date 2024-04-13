INSERT INTO users (
nome_user,
estado_civil_user,
cep_user,
logradouro_user,
num_logra_user,
bairro_user,
cidade_user,
estado_user,
contato_user,
email_user,
rede_social_user,
tipo_user,
img_user,
filhos 
) VALUES (
'Achei',
'Nao se aplica',
'59190000',
'br 101',102,'Areia Branca','Canguaretama','RN','84935009506',
'edomingoswork@gmail.com','github.com','empresa','./imgs/teste.png',
0
);

INSERT INTO vagas (nome_vaga,contrataca_vaga,tipo_vaga,salario_vaga,descricao_vaga,id_user)
VALUES ('Dev React Native','CLT','REMOTO',3000,'Desenvolver aplicativos moveis usando a biblioteca react native com expo',1);
INSERT INTO vagas (nome_vaga,contratacao_vaga,tipo_vaga,salario_vaga,descricao_vaga,id_user)
VALUES ('Dev React','PJ','REMOTO',5000,'Desenvolver aplicativos usando a biblioteca react',1);