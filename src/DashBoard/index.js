import React from 'react';
import Page from "../Shared/Page";
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight';
import styled, {css} from 'styled-components';

const ChartGrid = styled.div`
	display: grid;
	margin-top: 20px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`

export default function() {
	return <Page name="dashboard"> 
		<PriceGrid />
		<ChartGrid>
			<CoinSpotlight />
			<div> Chart goes here </div>
		</ChartGrid>
	</Page>
}