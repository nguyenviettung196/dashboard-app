import { BarSeries, ChartComponent, Inject, SeriesCollectionDirective, SeriesDirective, Legend, DataLabel, Category, Tooltip, ColumnSeries } from '@syncfusion/ej2-react-charts';
import React from 'react';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

const Column = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category={'Column Charts'} title='Opympic Medal Counts - Rio' />
      <ChartComponent
        id='bar-charts'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        // title='Opympic Medal Counts - Rio'
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ background: 'white' }}
      >
        <Inject services={[ColumnSeries, BarSeries, Tooltip, Legend, Category, DataLabel]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Column;