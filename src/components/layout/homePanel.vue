<template>
<el-container>
    <el-main>
        <el-row :gutter="20">
            <el-col :span="16">
                <img src="@/assets/images/left.jpg" />

                <!-- <p class="tl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p class="tl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <p class="tl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            -->
            </el-col>
            <el-col :span="8">
                <el-card class="mt4">
                    <el-form v-model="loginForm" v-if="LoginHide">
                        <h4 class="tl mt0">Login Form</h4>
                        <el-form-item v-if="!showPanel">
                            <el-input type="email" v-model="username" placeholder="Please Enter Your Email" :icon="Search" clearable>
                            </el-input>
                        </el-form-item>
                        <el-form-item class="mb0" v-if="!showPanel">
                            <el-input type="password" v-model="password" placeholder="Please Enter Password" clearable />
                        </el-form-item>
                        <!-- forgot password field -->
                        <el-form-item class="mb0" v-if="showPanel">
                            <el-input type="password" v-model="forgpassword" placeholder="Please Enter Password" clearable />
                        </el-form-item>
                         <!-- forgot password field end -->
                        <el-form-item class="mb2">
                            <el-checkbox v-model="checked" label="Remember me" size="medium" />
                            <el-link  v-on:click="forgotpassword" v-if="!showPanel">Forgot Password?</el-link>
                        </el-form-item>
                        <el-form-item v-if="!showPanel">
                            <el-input type="textarea" v-model="message" placeholder="Please Enter Message" />
                             <p class="mt0 mb0 tc">Need an Account? <el-link @click="signIn">Sign In</el-link></p>
                        </el-form-item>
                        <el-form-item class="tr fr">
                            <el-button type="secondary" @click="Cancel">Cancel</el-button>
                            <el-button type="primary" @click="Submit">Submit</el-button>
                        </el-form-item>
                    </el-form>
                     <!-- sign in form page -->
                    <el-form v-if="!LoginHide">
                        <h4>Sign In</h4>
                        <el-form-item>
                            <el-input placeholder="First Name" v-model="usserFirst" type="text" clearable />
                        </el-form-item>
                         <el-form-item>
                            <el-input placeholder="Last Name" v-model="userLast" type="text" clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="Email ID" v-model="userEmail" type="email" clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="Enter Password" v-model="userPassword" type="password" clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="Confirm Password" v-model="userConfirm" type="password" clearable />
                        </el-form-item>
                        <el-form-item class="tr fr">
                            <el-button type="secondary" @click="signIn">Cancel</el-button>
                            <el-button type="primary" @click="userSubmit">Submit</el-button>
                        </el-form-item>
                    </el-form>
                    <!-- sign in form -->
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref()
const password = ref()
const message = ref()
const forgpassword = ref()
const checked = ref(false)
const showPanel = ref(false)
const LoginHide = ref(true)
export default {
    name: 'homePanel',
    setup() {
        const router = useRouter()
        const Submit = () => {
            if (username.value && password.value && message.value ) {
                router.push({
                    path: '../../aboutPanel'
                })
            } else {
                console.log('error')
            }
        }
        const Cancel = () => {
            showPanel.value = false
            // router.push({
            //     path: '../../adminPage'
            // })
        }
        const forgotpassword = () => {
            console.log('panel 1', showPanel.value)
            showPanel.value = !showPanel.value
            console.log('panel 2', showPanel.value)
        }
        const signIn = () =>{
            LoginHide.value = !LoginHide.value
        }
        return {
            username,
            password,
            message,
            Submit,
            Cancel,
            checked,
            showPanel,
            forgpassword,
            forgotpassword,
            LoginHide,
            signIn
        }
    }
}
</script>
