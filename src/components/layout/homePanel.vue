<template>
<el-container>
    <el-main>
        <el-row :gutter="20" class="mt5">
            <el-col :span="16">
                <p class="tl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p class="tl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <p class="tl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </el-col>
            <el-col :span="8">
                <el-card class="mt4">
                    <el-form v-model="loginForm" :label-position="labelPosition" >
                        <h4 class="tl mt0">Login Form</h4>
                        <el-form-item label="User Name">
                            <el-input type="text" v-model="username" placeholder="Please Enter Your Email" clearable>
                                <el-icon><User/></el-icon>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Password">
                            <el-input type="text" v-model="password" placeholder="Please Enter Password" clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-input type="textarea" v-model="message"  placeholder="Please Enter Message"/>
                        </el-form-item>
                        <el-form-item class="tr fr">
                            <el-button type="secondary" @click="Cancel">Cancel</el-button>
                            <el-button type="primary" @click="Submit">Submit</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const message = ref('')
export default {
    name: 'homePanel',
    setup() {
        const router = useRouter()
        const Submit = () => { 
            console.log(username,password)   
            if (username.value && password.value) {
                router.push({
                    path: '../../aboutPanel'
                })
            } else {
                console.log('error')
            }
        }
         const Cancel = () => {
            console.log('Cancel')
            router.push({
                path: '../../adminPage'
            })
        }
        return {
            username,
            password,
            message,
            Submit,
            Cancel
        }
    }
}
</script>
