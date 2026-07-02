'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import PropertyListItem from './PropertyListItem';

const PropertyList: React.FC = () => {

    return (
        <>
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />

        </>
    )
}

export default PropertyList;