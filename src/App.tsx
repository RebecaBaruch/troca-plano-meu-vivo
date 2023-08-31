import React from 'react';
import './App.css';
import { 
  Box, 
  ButtonFixedFooterLayout, 
  ButtonLink, 
  ButtonPrimary, 
  DataCard, 
  IconArrowDownRegular, 
  Inline, 
  NavigationBar, 
  ResponsiveLayout,
  Text2,
  Text3,
  Text4,
  Text6,
  TextLink,
  skinVars,
} from '@telefonica/mistica';

function App() {
  return (
    <>
      <Box>
        <ResponsiveLayout>
          <React.Fragment>
            <NavigationBar
              onBack={() => {}}
              isInverse
              right={
                <Box width={300}>
                  <Text3 regular>
                    Troca de plano
                  </Text3>
                </Box>
              }
            />
            <Box paddingTop={24} paddingX={12}>
              <ResponsiveLayout>
                  <Text6 as='p'>Tenha ainda mais velocidade por até R$x por mês</Text6>
                  <Box paddingTop={32}>
                    <Text3 as='p' regular>
                      {`Seus planos: Vivo Fibra 300 Mega e Netflix Padrão`}
                    </Text3>
                    <Inline space={0} alignItems='baseline'>
                      <Text2 as='p' regular>
                        {`R$77,77`}
                      </Text2>
                      <Text2 as='p' regular>/mês</Text2>
                    </Inline>
                  </Box>
              </ResponsiveLayout>

              <React.Fragment>
                <ButtonFixedFooterLayout
                  button={
                    <ButtonPrimary 
                      onPress={() => console.log('Quero esse')}>
                        Quero esse
                    </ButtonPrimary>
                  }
                  secondaryButton={
                    <ButtonLink onPress={() => console.log('Exibir mais ofertas')}>
                      Exibir mais ofertas
                    </ButtonLink>
                  }
                >
                  <ResponsiveLayout>
                    <Box paddingTop={32}>
                      <DataCard
                        headline={`Oferta para você`}
                        extra={
                          <>
                            <Box paddingTop={16}>
                              <Text4 as='p' medium>
                                {`Vivo Fibra 500 Mega Netflix Premium`}
                              </Text4>
                              <Text6>
                                {`R$ 195,99/mês`}
                              </Text6>
                            </Box>

                            <Box paddingTop={24}>
                              <Inline space={8}>
                                <IconArrowDownRegular color={skinVars.colors.promoHighInverse} />
                                <Text3 regular>{`Download com até 500 Mbps`}</Text3>
                              </Inline>
                            </Box>

                            <Box paddingY={24}>
                              <TextLink 
                                href={`teste`}
                                style={{fontSize: '14px', fontWeight: 700}}
                              >
                                {`Conferir detalhes`}
                              </TextLink>
                            </Box>
                          </>
                        }
                      />
                    </Box>
                  </ResponsiveLayout>
                </ButtonFixedFooterLayout>
              </React.Fragment>
            </Box>
          </React.Fragment>
        </ResponsiveLayout>
      </Box>
    </>
  );
}

export default App;
