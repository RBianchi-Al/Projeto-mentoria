dispatch = apenas exporta o tipo dele para poder acessar as ações disponíveis nos outros arquivos (hooks)

RootState = exporta para todo o projeto e permite a obtenção do estado atual do redux (o hook). torna acessível o estado dela.

configureStore:

reducers - ficará os métodos (ações) que serão usadas no projeto

slice = é uma função que armazena todos os métodos de reducer que serão criados, métodos com ações.

para usar o reducer tem que exportar duas funcoes no arquivo useRedux ou hooks

useAppDispatch =tem que exportar a useDis... do propria biblioteca. Isso centraliza a chamada

useAppSelector = mapeia o redux que srá usado

é necessário encapsular o index com um Provider
