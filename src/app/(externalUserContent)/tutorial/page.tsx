import ExternalInfo from "@/components/ExternalInfo/ExternalInfo";

export default function Tutorial() {
    return (
        <>
            <ExternalInfo description={"Tutorial"} >
            <div className="space-y-4">
                    <section>
                        <h2 className="text-xl font-semibold">Registro e Login de Usuários</h2>
                        <p>Para começar a usar o sistema, você precisará criar uma conta ou fazer login. Siga os passos abaixo:</p>
                        <ol className="list-decimal list-inside">
                            <li>Acesse a página de Registrar.</li>
                            <li>Preencha seu nome completo, e-mail e senha.</li>
                            <li>Clique em "Registrar".</li>
                            <li>Para fazer login, vá para a página de login, insira seu e-mail e senha e clique em "Logar".</li>
                        </ol>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Calendário Interativo</h2>
                        <p>O calendário permite visualizar sua programação em diferentes formatos. Você pode navegar entre meses, semanas e dias:</p>
                        <ul className="list-disc list-inside">
                            <li>Para mudar a visualização, use os botões de navegação no topo do calendário.</li>
                            <li>Você pode clicar em qualquer data para ver os eventos daquele dia.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Adição de Eventos</h2>
                        <p>Para adicionar um evento ao calendário, siga os passos abaixo:</p>
                        <ol className="list-decimal list-inside">
                            <li>Clique no botão "Save".</li>
                            <li>Preencha o título, data, hora de início e término, localização e descrição do evento.</li>
                            <li>Para definir a recorrência do evento, selecione a opção desejada (diária, semanal, mensal).</li>
                            <li>Clique em "Save" para adicionar o evento ao calendário.</li>
                        </ol>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Alteração de Eventos</h2>
                        <p>Para alterar um evento existente:</p>
                        <ol className="list-decimal list-inside">
                            <li>Encontre o evento no calendário e clique nele.</li>
                            <li>Clique no botão com símbolo de um lápis.</li>
                            <li>Faça as alterações necessárias no título, data, hora de início e término, localização, descrição ou recorrência do evento.</li>
                            <li>Clique em "Save" para atualizar o evento.</li>
                        </ol>
                    </section>
                    <section>
                        <h2 className="text-xl font-semibold">Remoção de Eventos</h2>
                        <p>Para remover um evento do calendário:</p>
                        <ol className="list-decimal list-inside">
                            <li>Encontre o evento no calendário e clique nele.</li>
                            <li>Clique no botão "Delete".</li>
                            <li>Confirme a exclusão na janela de confirmação.</li>
                        </ol>
                    </section>
                </div>
            </ExternalInfo>
        </>
    );
}