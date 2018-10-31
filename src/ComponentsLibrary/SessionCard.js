import React from 'react';
import { SimpleSection } from './Section';
import { Text, BoldText } from './Text';
import { Card } from './Card';
import { ResponsiveLine } from '@nivo/line'
/**
 * @augments {Setting<{settingName: string, settingDescrption: string}}, State>}
 */
const SessionCard = ({ ...props, children}) => {

    return (
        <Card noPadding noLaterals>
            <SimpleSection noLaterals relative>
                <Text bolded noMargin>{props.name}</Text>
                <Text noMargin topMargin>{props.sessionDate}</Text>
                <Text noMargin topMargin><BoldText>Mejora: </BoldText>{props.improvment}</Text>
                { props.data &&
                <SimpleSection fixed>
                <ResponsiveLine
                    data={props.data}
                    margin={{
                        "top": 50,
                        "right": 110,
                        "bottom": 50,
                        "left": 60
                    }}
                    minY="auto"
                    stacked={true}
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Sesión",
                        "legendOffset": 36,
                        "legendPosition": "center"
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Desvíos",
                        "legendOffset": -40,
                        "legendPosition": "center"
                    }}
                    dotSize={10}
                    dotColor="inherit:darker(0.3)"
                    dotBorderWidth={2}
                    dotBorderColor="#ffffff"
                    enableDotLabel={true}
                    dotLabel="y"
                    dotLabelYOffset={-12}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "anchor": "bottom-right",
                            "direction": "column",
                            "translateX": 100,
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "symbolSize": 12,
                            "symbolShape": "circle"
                        }
                    ]}
                />
                </SimpleSection>
                }
            </SimpleSection>
        </Card>
    );
};

export default SessionCard;
export {
    SessionCard
}