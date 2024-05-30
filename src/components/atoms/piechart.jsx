
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, Grid } from '@mui/material';

const data = [
  { value: 5, label: 'Leads' },
  { value: 10, label: 'Sales' },
  { value: 15, label: 'New' },
  { value: 20, label: 'Old' },
];

const size = {
  width: 400,
  height: 200,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <Box>
        <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ p: '20px',m: '10px', width:'50%' }}>
                <Typography variant="h6" component="div">
                    Recent Marketing
                </Typography>
                <PieChart 
                series={[{ data, innerRadius: 15, paddingAngle: 5, arcLabel: getArcLabel, }]} {...size}
                >
                {/* <PieCenterLabel>Center label</PieCenterLabel> */}
                </PieChart>
            </Paper>
        </Grid>
</Box>
  );
}
