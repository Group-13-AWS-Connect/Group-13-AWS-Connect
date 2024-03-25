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
export declare type RecordingUpdateFormInputValues = {
    agent_id?: string;
    name?: string;
    transcript?: string;
    video?: string;
    tags?: string;
};
export declare type RecordingUpdateFormValidationValues = {
    agent_id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    transcript?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordingUpdateFormOverridesProps = {
    RecordingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    agent_id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    transcript?: PrimitiveOverrideProps<TextFieldProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecordingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recording?: any;
    onSubmit?: (fields: RecordingUpdateFormInputValues) => RecordingUpdateFormInputValues;
    onSuccess?: (fields: RecordingUpdateFormInputValues) => void;
    onError?: (fields: RecordingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordingUpdateFormInputValues) => RecordingUpdateFormInputValues;
    onValidate?: RecordingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecordingUpdateForm(props: RecordingUpdateFormProps): React.ReactElement;