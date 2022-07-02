import { ExtractPropTypes } from 'vue'

export const testProps = {}

export type TestProps = ExtractPropTypes<typeof testProps>