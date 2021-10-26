import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr:false,
})

const options:ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled:false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color:theme.colors.gray[600]
        },
        axisTicks: {
            color:theme.colors.gray[600]
        },
        categories: [
            '2021-05-05T00:00:00.000z',
            '2021-05-06T00:00:00.000z',
            '2021-05-09T00:00:00.000z',
            '2021-05-11T00:00:00.000z',
            '2021-05-14T00:00:00.000z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.7,
        }
    }
}

const series = [
    { name: 'series1', data: [31, 50, 101, 234, 421] }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    align="flex-start"
                >
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            h={160}
                        />
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taza de abertura</Text>
                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            h={160}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}