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
    agent_id?: string;
    name?: string;
    transcript?: string;
    video?: string;
    tags?: string;
};
export declare type RecordingCreateFormValidationValues = {
    agent_id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    transcript?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordingCreateFormOverridesProps = {
    RecordingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    agent_id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    transcript?: PrimitiveOverrideProps<TextFieldProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
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
