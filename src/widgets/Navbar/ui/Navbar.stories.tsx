import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Navbar } from "./Navbar";

export default {
    title: "widget/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof Navbar>

const Template:ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators =[ThemeDecorator(Theme.DARK)]

export const Dark = Template.bind({})
Dark.args = {}

