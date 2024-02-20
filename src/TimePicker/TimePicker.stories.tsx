import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimePicker from './TimePicker';
import React, { useState } from 'react'; // Import React and useState

export default {
    title: 'Example/TimePicker',
    component: TimePicker,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => {

    // Handler to be called when time changes
    const handleTimeChange = (time: number) => {
        console.log(time);
    };

    return <TimePicker {...args} onChange={handleTimeChange} />; // Pass onChange handler to TimePicker
};

export const Default = Template.bind({});
Default.args = { timeFormat: "12" };

export const HrFormat = Template.bind({});
HrFormat.args = { timeFormat: "24"};
