import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Ocak',
        gelir: 400,
        gider: 240,
    },
    {
        name: 'Şubat',
        gelir: 300,
        gider: 139,
    },
    {
        name: 'Mart',
        gelir: 200,
        gider: 98,
    },
    {
        name: 'Nisan',
        gelir: 278,
        gider: 390,
    },
    {
        name: 'Mayıs',
        gelir: 189,
        gider: 480,
    },
    {
        name: 'Haz.',
        gelir: 239,
        gider: 380,
    },
    {
        name: 'Tem.',
        gelir: 349,
        gider: 430,
    },
    {
        name: 'Agus.',
        gelir: 300,
        gider: 139,
    },
    {
        name: 'Eylül',
        gelir: 200,
        gider: 98,
    },
    {
        name: 'Ekim',
        gelir: 278,
        gider: 390,
    },
    {
        name: 'Kasım',
        gelir: 189,
        gider: 480,
    },
    {
        name: 'Aralık',
        gelir: 239,
        gider: 380,
    },
];

export default class ColumnChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="gider" fill="#8884d8" />
                    <Bar dataKey="gelir" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
