import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';
import {
    AffiliateIcon
} from '@shopify/polaris-icons';

import { Icon } from '@shopify/polaris';
import { PlusCircleIcon } from '@shopify/polaris-icons';
import { BlockStack, Card, Text, List, Button } from '@shopify/polaris';


function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component from Ostad Shopify Course</div>

                        <div className="card-body">I'm an example component!</div>

                        <HelloWorld />

                        <p>
                            <Icon source={PlusCircleIcon} />
                            <Icon source={AffiliateIcon} />
                        </p>
                    </div>

                    <Card roundedAbove="sm">
                        <BlockStack gap="400">
                            <BlockStack gap="200">
                                <Text as="h2" variant="headingSm">
                                    Customer
                                </Text>
                                <Text as="p" variant="bodyMd">
                                    John Smith
                                </Text>
                            </BlockStack>
                            <div>
                                <BlockStack gap="200">
                                    <Text as="h3" variant="headingSm" fontWeight="medium">
                                        Addresses
                                    </Text>
                                    <div>
                                        <Text as="p" variant="bodyMd">
                                            123 First St
                                        </Text>
                                        <Text as="p" variant="bodyMd">
                                            Somewhere
                                        </Text>
                                        <Text as="p" variant="bodyMd">
                                            The Universe
                                        </Text>
                                    </div>
                                    <div>
                                        <Text as="p" variant="bodyMd">
                                            123 Second St
                                        </Text>
                                        <Text as="p" variant="bodyMd">
                                            Somewhere
                                        </Text>
                                        <Text as="p" variant="bodyMd">
                                            The Universe
                                        </Text>
                                    </div>
                                </BlockStack>
                            </div>
                            <div>
                                <Text as="p" variant="bodyMd">
                                    A single subsection without a sibling has no visual appearance
                                </Text>
                            </div>
                        </BlockStack>
                    </Card>

                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    )
}
