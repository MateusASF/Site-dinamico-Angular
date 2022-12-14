import { Time } from "@angular/common"
import { AddressData } from "./addres-data-models"

export interface CadastroData {
    nome: string
    cpf: string
    nascimento: string
    endereco: AddressData
    contato: {
        telefone: string
        email: string
    }
    username: string
    senha: string
}
