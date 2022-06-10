import * as React from 'react';
import { Box, SimpleGrid, Icon, Heading, Link, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineFundProjectionScreen, AiOutlineUnorderedList, AiFillSchedule } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import Informative from '../../components/Informative';
import { Page } from '../../components/Page';
import { DarkBox_1, LightBox_1, LightBox_2 } from './theme';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLargerThan766] = useMediaQuery('(max-width: 766px)');

  const [time, setTime] = useState(Date.now());

  let theme = window.localStorage.getItem("theme");

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 100);
    return () => {
      theme = window.localStorage.getItem("theme");
      clearInterval(interval);
    };

  }, []);

  return (

    <Page
    >

      <Box textAlign="center" fontSize="xl" p={8}>
        <SimpleGrid columns={[1, null, 2]} minH="100%" spacing={8} justifyItems="center">
          <Informative />
          {!isLargerThan766 && (
            <Box w="70%">
              <Link color="teal" href="/informacoes-uteis" _focus={{ boxShadow: 'none' }}>
                <Box
                  style={theme === "light" ? LightBox_2 : DarkBox_1}
                >
                  <Icon as={IoMdInformationCircleOutline} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Informações Úteis
                  </Heading>
                </Box>
              </Link>
              <Link color="white" href="/calendario" _focus={{ boxShadow: 'none' }}>
                <Box mb={2} p="1px" bgColor="teal">
                  <Box
                    style={LightBox_1}

                  >
                    <Icon as={FaRegCalendarAlt} fontSize="1.6rem" mr={3} />
                    <Heading fontSize="md" textTransform="uppercase">
                      Calendário
                    </Heading>
                  </Box>
                </Box>
              </Link>
              <Link color="teal" href="/projetos-ativos" _focus={{ boxShadow: 'none' }}>
                <Box
                  style={theme === "light" ? LightBox_2 : DarkBox_1}

                >
                  <Icon as={AiOutlineFundProjectionScreen} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Projetos Ativos
                  </Heading>
                </Box>
              </Link>
              <Link color="white" href="/grupos-de-pesquisa" _focus={{ boxShadow: 'none' }}>
                <Box mb={2} p="1px" bgColor="teal">
                  <Box
                    style={LightBox_1}
                  >
                    <Icon as={BiGroup} fontSize="2rem" mr={2} />
                    <Heading fontSize="md" textTransform="uppercase">
                      Grupos de Pesquisa
                    </Heading>
                  </Box>
                </Box>
              </Link>
              <Link color="teal" href="/ofertas-disciplinas" _focus={{ boxShadow: 'none' }}>
                <Box
                  style={theme === "light" ? LightBox_2 : DarkBox_1}
                >
                  <Icon as={AiOutlineUnorderedList} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Ofertas de disciplina
                  </Heading>
                </Box>
              </Link>
              <Link color="white" href="/complementary-activities/list" _focus={{ boxShadow: 'none' }}>
                <Box mb={2} p="1px" bgColor="teal">
                  <Box
                    style={LightBox_1}
                  >
                    <Icon as={AiOutlineUnorderedList} fontSize="2rem" mr={2} />
                    <Heading fontSize="md" textTransform="uppercase">
                      Atividades Complementares
                    </Heading>
                  </Box>
                </Box>
              </Link>
              <Link color="teal" href="/montar-horario" _focus={{ boxShadow: 'none' }}>
                <Box style={theme === "light" ? LightBox_2 : DarkBox_1}>
                  <Icon as={AiFillSchedule} fontSize="2rem" mr={2} />
                  <Heading fontSize="md" textTransform="uppercase">
                    Montar Horário
                  </Heading>
                </Box>
              </Link>
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </Page>
  );
};

export default Dashboard;
