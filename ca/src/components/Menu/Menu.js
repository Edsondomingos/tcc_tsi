import { ContainerRow, Buttons } from './style';

export default (props) => {
  return (
    <ContainerRow onPress={() => props.navigation.navigate('Index')}>
      <Buttons
        onPress={() => navigation.navigate('Vagas')}
        source={require('../../../imgs/homeBranco.png')}
      />
      <Buttons source={require('../../../imgs/postBranco.png')} />
      <Buttons source={require('../../../imgs/perfilBranco.png')} />
    </ContainerRow>
  );
};
