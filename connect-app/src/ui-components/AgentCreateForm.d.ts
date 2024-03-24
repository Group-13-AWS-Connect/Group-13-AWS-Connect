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
export declare type AgentCreateFormInputValues = {
    agent_id?: string;
    name?: string;
    status?: string;
};
export declare type AgentCreateFormValidationValues = {
    agent_id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgentCreateFormOverridesProps = {
    AgentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    agent_id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgentCreateFormProps = React.PropsWithChildren<{
    overrides?: AgentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgentCreateFormInputValues) => AgentCreateFormInputValues;
    onSuccess?: (fields: AgentCreateFormInputValues) => void;
    onError?: (fields: AgentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgentCreateFormInputValues) => AgentCreateFormInputValues;
    onValidate?: AgentCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgentCreateForm(props: AgentCreateFormProps): React.ReactElement;
