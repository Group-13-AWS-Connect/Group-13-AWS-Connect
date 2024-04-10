/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgentInfoCreateFormInputValues = {
    name?: string;
    email?: string;
    password?: string;
};
export declare type AgentInfoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgentInfoCreateFormOverridesProps = {
    AgentInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgentInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: AgentInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgentInfoCreateFormInputValues) => AgentInfoCreateFormInputValues;
    onSuccess?: (fields: AgentInfoCreateFormInputValues) => void;
    onError?: (fields: AgentInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgentInfoCreateFormInputValues) => AgentInfoCreateFormInputValues;
    onValidate?: AgentInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgentInfoCreateForm(props: AgentInfoCreateFormProps): React.ReactElement;
