import React from 'react'
import FormDriver from './FormDriver'
import ParentCard from '../../components/shared/ParentCard';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import CarDriverForm from './CarDriverForm';

export default function DriverCreate() {
  return (
    <PageContainer title="Driver & Car Details Form" description="this is Custom Form page">
        <Breadcrumb title="Driver & Car Details Form" subtitle="" />
        <ParentCard title="Fill up the Following from">
            <CarDriverForm/>
        </ParentCard>
    </PageContainer>
  )
  
}
