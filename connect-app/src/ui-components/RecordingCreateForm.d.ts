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
export declare type RecordingCreateFormInputValues = {
    date?: string;
    agentname?: string;
    agentid?: string;
    transcript?: string;
    video?: string;
};
export declare type RecordingCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    agentname?: ValidationFunction<string>;
    agentid?: ValidationFunction<string>;
    transcript?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordingCreateFormOverridesProps = {
    RecordingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    agentname?: PrimitiveOverrideProps<TextFieldProps>;
    agentid?: PrimitiveOverrideProps<TextFieldProps>;
    transcript?: PrimitiveOverrideProps<TextFieldProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordingCreateFormProps = React.PropsWithChildren<{
    overrides?: RecordingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecordingCreateFormInputValues) => RecordingCreateFormInputValues;
    onSuccess?: (fields: RecordingCreateFormInputValues) => void;
    onError?: (fields: RecordingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordingCreateFormInputValues) => RecordingCreateFormInputValues;
    onValidate?: RecordingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecordingCreateForm(props: RecordingCreateFormProps): React.ReactElement;
