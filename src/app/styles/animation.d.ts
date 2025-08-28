/**
 * @description Defining property sizing for responsive layout
 * @param {RuleSet | string} start value jf animation
 * @param {RuleSet | string} end value jf animation
 * @param {RuleSet | string} duration
 * @param  {RuleSet | string} delay
 * @param  {RuleSet | string} transformType
 * @param  {boolean | string} isWithOpasity
 * @returns {RuleSet} Return animation
 */
import { type RuleSet } from 'styled-components';
type props = {
    start?: RuleSet | string;
    middle?: RuleSet | string;
    end?: RuleSet | string;
    duration?: RuleSet | string;
    delay?: RuleSet | string;
    transformType?: RuleSet | string;
    isWithOpacity?: boolean;
};
export declare const translateAnimation: ({ start, middle, end, transformType, duration, delay, isWithOpacity }: props) => RuleSet<object>;
export {};
