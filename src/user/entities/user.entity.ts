import { get } from "http";

export class User {
    nome: string;
    email: string;
    senha: string;
    avatar: string;

    constructor(nome, email, senha, avatar) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.avatar = avatar;
    }

    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getSenha() {
        return this.senha;
    }
    getAvatar() {
        return this.avatar;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
}
