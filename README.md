# 🏟️ Estadios do Brasil

- Projeto desenvolvido com o objetivo de praticar a criação e gerenciamento de APIs RESTful utilizando uma entidade principal: **Estádios**.

## 📌 Objetivo

- Criar uma API para realizar operações CRUD (Create, Read, Update, Delete) sobre estádios de futebol no Brasil, com foco na prática de conceitos como rotas, controllers, models e manipulação de dados.

---

## Estrutura do Projeto

src/
  |
  |_controllers/
  |
  |_types/
  |
  |__database/
  |
  |__shared/
  |
  |__routes/
  |
  |__App.ts

test/
  |
  |__controllers/
  |
  |__routers/
  |
  |__shared/
  |
  |__database/
  |
  |__jest.setup.ts

## 📦 Entidade Principal

### 🏟️ Estádios

| Campo           | Tipo   | Descrição                      |
| --------------- | ------ | ------------------------------ |
| `id`            | Número | Identificador único do estádio |
| `nome`          | Texto  | Nome do estádio                |
| `capacidade`    | Número | Capacidade total de público    |
| `dataDeCriacao` | Texto  | Data de inauguração do estádio |

---

## ✅ Funcionalidades da API

* [ ] **Criar** um novo estádio
* [ ] **Listar** todos os estádios
* [ ] **Buscar** um estádio por ID
* [ ] **Atualizar** completamente um estádio (PUT)
* [ ] **Atualizar** parcialmente os dados de um estádio (PATCH)
* [ ] **Deletar** um estádio
* [ ] **Validação** das requisições

---

## 🚧 Status do Projeto

> Em desenvolvimento – funcionalidades sendo implementadas.

---

## 💡 Tecnologias Sugeridas 

* Node.js
* TypeScript
* Express.js
* YUP 
* Jest e Supertest
* Knex
* SQLite

---